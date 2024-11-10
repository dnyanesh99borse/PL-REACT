const express = require('express');
const app = express();
const connectDB = require('./db/connectDB.js');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth.routes.js');
const user = require('./models/user.model.js')
const PORT = process.env.PORT;

dotenv.config();

app.use(express.json());




app.use('/', authRouter);

app.listen(PORT,  () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})