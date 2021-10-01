// Libraries
import express from "express";
import passport from "passport";

// Database model
import { UserModel } from "../../database/allModels";

const Router = express.Router();

/*
Route   /
Des     Get user data
Params  _id
Body    none
Access  Public
Method  Get
*/
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
    try {
        const { fullname, email, phoneNumber, address } = 
            req.session.passport.user._doc;

        return res.json({ user: { fullname, email, phoneNumber, address }});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /:_id
Des     Get user data
Params  _id
Body    none
Access  Public
Method  Get
*/
Router.get("/:_id", passport.authenticate("jwt"), async (req, res) => {
    try {
        const user = await UserModel.findById(req.params._id);
        const { fullname } = user;

        return res.json({ user: { fullname }});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /update
Des     Update user id
Params  userId
Body    user data
Access  Public
Method  Put
*/
Router.put("/update/userId", async (req,res) => {
    try {
        const { userId } = req.params;
        const { userData } = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(
            userId, 
            { $set: userData, },
            { new: true },
        );

        return res.json({ user: updateUserData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;