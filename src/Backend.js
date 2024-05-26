const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware

const app = express();
const port = 3001;
app.use(cors()); // Enable CORS for all requests

app.use(bodyParser.json());

let notes = ["Note 1 from Node.js", "Note 2 from Node.js"];

app.get('/notes', (req, res) => {
  res.json({ notes });
});

app.post('/notes', (req, res) => {
  const { content } = req.body;
  notes.push(content);
  res.json({ message: 'Note added successfully' });
});

app.listen(port, () => {
  console.log(`Node.js backend listening at http://localhost:${port}`);
});
