const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Ruta para guardar datos en un archivo
app.post("/api/save", (req, res) => {
  const data = req.body;

  // Guarda los datos en un archivo
  fs.appendFile("data.json", JSON.stringify(data) + "\n", (err) => {
    if (err) {
      console.error("Error al guardar los datos:", err);
      return res.status(500).send("Error al guardar los datos.");
    }
    res.status(200).send("Datos guardados correctamente.");
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});