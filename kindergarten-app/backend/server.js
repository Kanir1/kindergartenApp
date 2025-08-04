const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // ✅ ADD THIS
const childRoutes = require('./routes/childRoutes');

dotenv.config();
const app = express();

app.use(cors()); // ✅ ALLOW ALL ORIGINS TEMPORARILY
app.use(express.json());
app.use('/api/children', childRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error(err));
