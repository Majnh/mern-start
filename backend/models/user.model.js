import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Definition of the Mongoose schema for a user (User)
const userSchema = new Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  motDePasse: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  dateCreation: { type: Date, default: Date.now },
});

// Creation of the Mongoose "User" template
// The third argument ("users") is the explicit name of the MongoDB collection.
// If the collection exists, it will be used; otherwise, it will be created automatically.
const User = model("User", userSchema, "users");

export default User;
