const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
// Basic route
app.get('/', (req, res) => {
    res.send('Here I am your first running API!'); // <<< this line has been modified for testing purposes
});
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/reset-password', require('./routes/resetPassword'));

// Set up the server to listen on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
