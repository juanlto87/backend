const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para guardar datos en un archivo
app.post("/api/save", (req, res) => {
  const formData = req.body;

  const logEntry = `Nombre: ${formData.name}, Fecha y Hora: ${formData.dateTime}\n`;

  // Guarda los datos en un archivo
  fs.appendFile("data.txt", logEntry, (err) => {
    if (err) {
      console.error("Error al guardar los datos:", err);
      return res.status(500).send("Error al guardar los datos.");
    }
    res.status(200).send("Formulario almacenado con éxito.");
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
