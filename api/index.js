const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); // Added path module

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Make sure CORS is initialized before routes

// Basic route
app.get('/', (req, res) => {
    res.send('Here I am, your first running API!'); // <<< This line has been modified for testing purposes
});

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/reset-password', require('./routes/resetPassword'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Serve the static files from the React app's build folder
    app.use(express.static(path.join(__dirname, '../build')));
  
    // For any route that is not handled by the API, serve index.html
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
    });
}
  
// Set up the server to listen on a specific port
const PORT = process.env.PORT || 5000; // Allow the environment variable to override the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
