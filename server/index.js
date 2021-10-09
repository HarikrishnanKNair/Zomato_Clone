// Importing Env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// Configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// Microservices routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/menu";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";
import MailService from "./API/Mail";

// Database Connection
import ConnectDB from "./database/connection";

const zomato = express();

// Application Middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());

// Passport configuration
googleAuthConfig(passport);
routeConfig(passport);

// Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);
zomato.use("/mail", MailService);

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is running"))
    .catch(() =>
      console.log("Server is running, but database connection failed... ")
    )
);