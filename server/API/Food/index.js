// Libraries
import express from "express";
import passport from "passport";

// Database model
import { FoodModel } from "../../database/allModels";

// validation
import { ValidateCategory, ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();

/*
Route   /r
Des     Get all food based on particular restaurant
Params  id
Access  Public
Method  Get
*/
Router.get("/r/:_id", async (req, res) => {
    try {
        await ValidateRestaurantId(req.params);
        const{ _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id });

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /:_id
Des     Get food based on id
Params  _id
Access  Public
Method  Get
*/
Router.get("/:_id", async (req, res) => {
    try {
        const{ _id } = req.params;
        const foods = await FoodModel.findById(_id);

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /c
Des     Get all food based on particular category
Params  category
Access  Public
Method  Get
*/
Router.get("/r/:category", async (req, res) => {
    try {
        await ValidateCategory(req.params);
        const{ category } = req.params;
        const foods = await FoodModel.find({ category: {$regex: category, $options: "i" }, 
        });

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   POST /foods/new
Des     add new food record to database
Access  PRIVATE
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { foodData } = req.body;
      const newFood = await FoodModel.create(foodData);
      return res.json({ foods: newFood });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

/*
Route   PATCH /foods/update
Des     update exisiitng food data
Access  PRIVATE
*/
Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { foodData } = req.body;
      const updateFood = await FoodModel.findByIdAndUpdate(
        foodData._id,
        {
          $set: foodData,
        },
        { new: true }
      );
  
      if (!updateFood)
        return res.status(404).json({ foods: "Food record Not Found!!!" });
  
      return res.json({ foods: updateFood });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

/*
Route   DELETE /foods/delete
Des     delete exisiitng food data
Access  PRIVATE
*/
Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { foodData } = req.body;
      const deleteFood = await FoodModel.findByIdAndRemove(foodData._id);
  
      return res.json({ foods: Boolean(deleteFood) });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

export default Router;