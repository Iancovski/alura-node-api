import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@alura.jkbpwyo.mongodb.net/alura-node-api");

let db = mongoose.connection;

export default db;