const express = require('express');
const app = express();
const connectDB = require('./db/connectDB.js');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth.routes.js');
const user = require('./models/user_model/user.model.js')
const PORT = process.env.PORT;

dotenv.config();

app.use(express.json());

const cors = require('cors');

// Allow requests from the frontend
app.use(cors({
    origin: 'http://localhost:3000', // React frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));



app.use('/', authRouter);

app.listen(PORT,  () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})