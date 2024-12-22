const {College,Course,Field,Notes} = require('../models/branch_model/branch_model');


const insertColleges = async (req, res) => {
    try {
       
        // const colleges = await College.insert({ name: "NMIMS" });
        const colleges = await College.insertMany(schoolData);
        res.status(200).json({ message: "College added successfully" });
        console.log('Data inserted')
    }catch(error){
        console.error(error)
    }
};




const getSuggestions = async (req, res) => {
    try {
        let query = req.query; // Get 'query' from the request parameters
        query = query.query;
        if (!query) {
            return res.status(400).json({ suggestions: [] });
        }

        const suggestions = await College.find({
            name: { $regex: query, $options: 'i' }, // Case-insensitive search
        }).limit(10);

        res.status(200).json({ suggestions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching suggestions' });
    }
};

module.exports = {
    insertColleges,
    getSuggestions,
};  //exporting the function to be used in other files.