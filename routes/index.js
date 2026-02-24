const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
//Route to get all users
router.get("/users", userController.getAllUsers);
//route to search a user by id
// router.get("/users/:id", userController.getUserById);
router.get("/users/:last_name", userController.getUserByLastName);
//create
router.post("/users", userController.createUser);
//route to edit a user
router.put("/users", userController.updateUser);
//route to delete a user
router.delete("/users", userController.deleteUser);
module.exports = router;
