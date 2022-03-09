// const express = require("express");
import express from "express";
import mongoose from "mongoose";
// import methods from "./controllers/wilder";
import dotenv from "dotenv";
import wilderRouter from "./routes/wilder";

dotenv.config();

const app = express();
const PORT = 3000;
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

app.use("/api/wilder", wilderRouter)

app.use((req, res) => {
  res.status(404).send("Route qui n'existe pas");
});

app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`)); // callback qui sert a dire qu'on est bien ∆
