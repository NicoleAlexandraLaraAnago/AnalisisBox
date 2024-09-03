const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const CRUDBoxer = require('./crudBoxer');

// Crea una aplicación Express
const app = express();
const crudBoxer = new CRUDBoxer(); // Crea una instancia de CRUDBoxer

app.use(bodyParser.json()); // Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(cors());            // Middleware para permitir CORS

// Ruta para crear un nuevo boxeador
app.post('/boxers', (req, res) => {
  const { builderType, name, objective } = req.body; // Extrae datos del cuerpo de la solicitud
  crudBoxer.createBoxer(builderType, name, objective); // Llama al método para crear un boxeador
  res.status(201).send('Boxer created'); // Responde con un estado 201 (creado)
});

// Ruta para obtener todos los boxeadores
app.get('/boxers', (req, res) => {
  const boxers = crudBoxer.getAllBoxers(); // Llama al método para obtener todos los boxeadores
  res.json(boxers);                        // Responde con la lista de boxeadores en formato JSON
});

// Ruta para eliminar un boxeador por nombre
app.delete('/boxers/:name', (req, res) => {
  const { name } = req.params;             // Extrae el nombre de los parámetros de la ruta
  crudBoxer.deleteBoxer(name);             // Llama al método para eliminar el boxeador
  res.status(200).send('Boxer deleted');   // Responde con un estado 200 (OK)
});

const exercises = require('./exercises');

app.get('/exercises', (req, res) => {
  res.json(exercises);
});


// Inicia el servidor en el puerto 3002
app.listen(3002, () => {
  console.log('Server running on port 3002');
});
