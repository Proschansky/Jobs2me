// server.js
//
const path = require('path');
const express = require('express');
const PORT = process.env.HTTP_PORT || 8081;
const app = express();
app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html' ))
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});