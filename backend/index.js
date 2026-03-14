const express = require('express');
const cors = require('cors');
const dotenv = require('@dotenvx/dotenvx');
dotenv.config();
const connectDB = require('./db/db');
const dns = require('dns');


const app = express();
const PORT = process.env.PORT || 3000;
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Database connection
connectDB();


// Middlewares
app.use(cors({
    
}));
app.use(express.json());


// Import routes


// Routes


// Error handling middleware    




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});