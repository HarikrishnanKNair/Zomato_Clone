// Libraries
import express from "express";
import passport from "passport";

// Database model
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route   /
Des     get all reviews
Params  resid
Body    none
Access  Public
Method  Get
*/
Router.get("/:resid", async (req, res) => {
    try {
        const reviews = await ReviewModel.find({restaurant: req.params.resid})

        return res.json({ reviews });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /new
Des     add new review/rating
Params  none
Body    review object
Access  Public
Method  Post
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        const { _id } = req.session.passport.user._doc; 
        const { reviewData } = req.body;

        await ReviewModel.create({ ...reviewData, user: _id });

        return res.json({ review: "Successfully Created Review." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /delete
Des     delete review/rating
Params  _id
Body    none
Access  Public
Method  Delete
*/
Router.delete("/delete/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ review: "Successfully Deleted the Review." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;