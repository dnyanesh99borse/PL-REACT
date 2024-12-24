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



const subjectSchema = new mongoose.Schema({
    branch: {
        type: String,
        required: true
    },
    semister: {
        type: Number,
        required: true
    },
    subjects: {
        type: [String],
        required: true
    }
});


const College = mongoose.model("College", collegeSchema);
const Course = mongoose.model("Course", courseSchema);
const Branch = mongoose.model("Branch", branchSchema);
const Subject = mongoose.model("Subject", subjectSchema);



module.exports = {
    College,
    Course,
    Branch,
    Subject
};