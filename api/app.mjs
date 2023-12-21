// app.js
import express from"express";
import bodyParser from"body-parser";
import mySql from 'mysql2'
 
const app = express();
const port = 3030;
const connection = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'timecraft',
});
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use(bodyParser.json());


let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// GET endpoint to fetch all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// POST endpoint to add a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT endpoint to update an existing item
app.put('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  items = items.map(item => (item.id === itemId ? updatedItem : item));

  res.json(updatedItem);
});

// DELETE endpoint to delete an item
app.delete('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter(item => item.id !== itemId);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app , connection };