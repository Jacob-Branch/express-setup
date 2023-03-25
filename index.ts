import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Recieved');
});

app.post('/', (req, res) => {
  console.log(String(req))
  res.send("Recieved")
})

app.listen(PORT, () => {
  console.log(`Express API @ http://localhost:${PORT}`);
});
