const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});