import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5001; // Changed port to 5001

app.use(cors());
app.use(bodyParser.json());

let songs = [];

app.get('/songs', (req, res) => {
  res.json(songs);
});

app.post('/songs', (req, res) => {
  const song = req.body;
  songs.push(song);
  res.status(201).json(song);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});