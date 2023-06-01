const express = require('express');
const db = require('./app/config/conexion');
const cors = require('cors');

const index = express();
const PORT = process.env.PORT || 3306;

index.use(express.urlencoded({ extended: false }));
index.use(express.json());
index.use(cors());

// Rutas de la API REST

// Obtener todas las personas
index.get('/personas', (req, res) => {
  db.query("SELECT * FROM Personas", (error, data) => {
    if (error) {
      throw error
    }
    res.json(data)
  })
})

// Obtener una persona por su ID
index.get('/personas/:id', (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM Personas WHERE Id = ?";
  db.query(sql, [id], (error, data) => {
    if (error) {
      throw error;
    }
    res.json(data)
  });
});

// Agregar una nueva persona
index.post('/personas', (req, res) => {
  const { nombre, edad, deporte } = req.body;

  const sql = "INSERT INTO Personas (Nombre, Edad, Deporte) VALUES (?, ?, ?)";
  db.query(sql, [nombre, edad, deporte], (error, result) => {
    if (error) {
      throw error;
    }
    res.json({
      mensaje: 'Persona agregada',
      data: result
    });
  });
});

// Eliminar una persona por su ID
index.delete('/personas/:id', (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM Personas WHERE Id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.json({
      mensaje: 'Persona eliminada',
      data: result
    });
  });
});

index.listen(PORT, () => {
  console.log("Servidor en ejecución en el puerto:", PORT);
});
