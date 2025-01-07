const mongoose = require('mongoose');

const uri = "mongodb+srv://walhedarshan6:emNzArj89An6khAJ@pass-auth.o2rhk.mongodb.net/?retryWrites=true&w=majority&appName=pass-auth";

 const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected : ${conn.connection.host}`);
    }catch(error){
        console.log(`Error connectio to MongoDB : `, error.message)
        process.exit(1)
    }

}

module.exports = connectDB;

