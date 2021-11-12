
const PetShelterController = require("../controllers/PetShelter.controller");


module.exports = (app) => {

    app.get("/api/petshelter", PetShelterController.findAllPets);
    app.post("/api/petshelter", PetShelterController.createNewPet);
    app.get("/api/petshelter/:id", PetShelterController.findOnePet);
    app.put("/api/petshelter/:id", PetShelterController.updatePet);
    app.delete("/api/petshelter/:id", PetShelterController.deletePet);

}