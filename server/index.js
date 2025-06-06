require('dotenv').config();

console.log('Loaded API key:', process.env.WEATHERAPI_KEY);

const express = require('express');
const cors = require('cors');
const forecastRoutes = require('./routes/forecast');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/forecast', forecastRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
