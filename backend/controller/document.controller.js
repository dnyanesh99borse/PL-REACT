const {College,Course,Field,Notes} = require('../models/branch_model/branch_model');
const { ObjectId } = require('mongodb'); // Ensure ObjectId is imported

const insertColleges = async (req, res) => {
    try {
        const { name } = req.body;
        const college = new College({ name });
        await college.save();
        res.status(201).json(college);
    } catch (error) {
        res.status(500).json({ message: "Failed to add college", error });
    }
};


const addCourse = async (req, res) =>{
    try {
        const { name, collegeId } = req.body;
        const course = new Course({ name, collegeId });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: "Failed to add course", error });
    }
}



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


 // Ensure ObjectId is imported


 const getCourses = async (req, res) => {
    try {
        const collegeId = req.params.collegeId; // Extract the collegeId parameter
        console.log("College ID:", collegeId);

        const courses = await Course.find({ collegeId: new ObjectId(collegeId) }); // Use ObjectId
        console.log("Courses:", courses);

        res.json(courses);
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ message: "Failed to fetch courses", error });
    }
};






module.exports = {
    insertColleges,
    getSuggestions,
    addCourse,
    getCourses
};  //exporting the function to be used in other files.