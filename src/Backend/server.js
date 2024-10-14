const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/lixo_dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definir o esquema e o modelo para lixeiras
const binSchema = new mongoose.Schema({
  location: {
    coordinates: [Number],
  },
  fillLevel: Number,
});
const Bin = mongoose.model('Bin', binSchema);

// Rota para obter lixeiras
app.get('/api/bins', async (req, res) => {
  try {
    const bins = await Bin.find();
    res.json(bins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
