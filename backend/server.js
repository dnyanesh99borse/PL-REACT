const express = require('express');
const app = express();
const connectDB = require('./db/connectDB.js');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth.routes.js');
const contactRouter = require('./routes/contact.routes.js');
const cors = require('cors');
const PORT = process.env.PORT;

dotenv.config();

app.use(express.json());

// Allow requests from the frontend
app.use(cors({
    origin: 'http://localhost:3000', // React frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));

// Routes
app.use('/', authRouter);
app.use('/', contactRouter);

// Start server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});


