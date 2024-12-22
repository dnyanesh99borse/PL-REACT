const {College,Course,Field,Notes} = require('../models/branch_model/branch_model');


const insertColleges = async (req, res) => {
    // Data to be inserted
    const schoolData = [
        { name: "NMIMS, Mumbai" },
        { name: "NMIMS, Shirpur" },
        { name: "RC Patel, Shirpur" },
        { name: "D.Y. Patil, Pune" },
        { name: "Sandeep University, Nashik" },
        { name: "Fergusson College, Pune" },
      ];
    try {
       
        // const colleges = await College.insert({ name: "NMIMS" });
        const colleges = await College.insertMany(schoolData);
        res.status(200).json({ message: "College added successfully" });
        console.log('Data inserted')
    }catch(error){
        console.error(error)
    }
};

insertColleges();