const mongoose = require('mongoose');


// College Schema
const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// Course Schema
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: "College", required: true },
});

// Branch Schema
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

// Subject Schema
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

// Unit Schema
const unitsSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    units: {
        type: [String],
        required: true
    }
});

// Topic Schema
const topicSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    topics:{
        type: [String],
        required: true
    }
});


const College = mongoose.model("College", collegeSchema);
const Course = mongoose.model("Course", courseSchema);
const Branch = mongoose.model("Branch", branchSchema);
const Subject = mongoose.model("Subject", subjectSchema);
const Units = mongoose.model("Units", unitsSchema);
const Topics = mongoose.model("Topics", topicSchema);



module.exports = {
    College,
    Course,
    Branch,
    Subject,
    Units,
    Topics
};