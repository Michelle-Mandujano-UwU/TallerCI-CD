const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Esta es una respuesta sencilla')
})
app.get('/Suma', (req, res) => {
  const {a, b} = req.query;
  const resultado = Number(a) + Number(b);  
  res.json({ resultado });

})
module.exports = app;
