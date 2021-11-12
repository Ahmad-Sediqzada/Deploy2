const mongoose = require("mongoose");

const PetShelterSchema = new mongoose.Schema({


    name: {
        type: String,
        required: [true, "A Pet name is required!"],
        minLength: [3, "A Pet name must be at least 3 characters long"]
    },

    type: {
        type: String,
        required: [true, "A Pet type is required!"],
        minLength: [3, "A Pet type must be at least 3 characters long"]
    },

    description: {
        type: String,
        required: [true, "A Pet description is required!"],
        minLength: [3, "A Pet description must be at least 3 characters long"]
    },

    skills: {
        type: String,
        required: [true, "A Pet skills is required!"],
        max: [3, "No more than 3 for skills"]
    },

}, { timestamps: true })



const PetShelter = mongoose.model("PetShelter", PetShelterSchema);


module.exports = PetShelter;