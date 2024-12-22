const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});


const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: "College", required: true },
});



const branchSchema = new mongoose.Schema({
    college: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    branches: {
        type: [String], // An array of branches
        required: true,
    },
});



const notesSchema = new mongoose.Schema({
    notes: {
        type: String,
        required: true
    }
});


const College = mongoose.model("College", collegeSchema);
const Course = mongoose.model("Course", courseSchema);
const Branch = mongoose.model("Branch", branchSchema);
const Notes = mongoose.model("Notes", notesSchema);



module.exports = {
    College,
    Course,
    Branch,
    Notes
};