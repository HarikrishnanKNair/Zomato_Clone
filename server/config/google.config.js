import passport from "passport";
import googleOAuth from "passport-google-oauth20";

import { UserModel } from "../database/allModels";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback",
        },
          async (accesToken, refreshToken, profile, done) => {
            // Creating a new user object
              const newUser = {
                  fullname: profile.displayName,
                  email: profile.emails[0].value,
                  profilePic: profile.photos[0].value,
              };
              try{
                  // check if user exists
                  const user = await UserModel.findOne({ email: newUser.email });
                  if(user){
                      // Generate token
                      const token = user.generateJwtToken();
                      // return error
                      done(null, { user, token});
                  }else{
                      // create new user
                      const user = await UserModel.create(newUser);
                      // Generate token
                      const token = user.generateJwtToken();
                      // return user
                      done(null, { user, token});
                  }
              } catch (error) {
                done(error, null);
              }
          }
        )
    );

    passport.serializeUser((userData, done) => done(null,{...userData}));
    passport.deserializeUser((id, done) => done(null, id));
};