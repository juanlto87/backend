const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/local", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Form = mongoose.model("Form", formSchema);

app.post("/api/save", async (req, res) => {
  const data = req.body;
  try {
    const formEntry = new Form(data);
    await formEntry.save();
    res.status(200).send("Datos guardados en MongoDB.");
  } catch (err) {
    console.error("Error al guardar en MongoDB:", err);
    res.status(500).send("Error al guardar los datos.");
  }
});
