import express from "express";
import { getUsers, postUser, updateUser, deleteUser } from "../controllers/user.controller.js";
const router = express.Router();

// Retrieve all users
router.get("/", getUsers);

// Create a new user
router.post("/", postUser);

// Update an existing user by ID
router.put("/:id", updateUser);

// Delete a user by ID
router.delete("/:id", deleteUser);

export default router;
