// const express = require("express");
import express from "express";
import mongoose from "mongoose";
import methods from "./controllers/wilder";
import { body, validationResult } from 'express-validator';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;
// on se connecte avec mongoose
mongoose
  .connect(
    process.env.MONGO_URI,
    { autoIndex: true }
  )
  .then(() => console.log("Connecté à la BDD"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/api/wilder/create", methods.create, body('name').isLength({ min: 5 }).withMessage("minimum 5"),
(req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }});



app.get("/", methods.find);
app.delete("/api/wilder/:id", methods.delete);
app.put("/api/wilder/:id", methods.update);

app.listen(port, () => console.log("Serveur lancé sur la route 3000")); // callback qui sert a dire qu'on est bien ∆
