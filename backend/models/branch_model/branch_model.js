const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
const courseSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    }
});
const fieldSchema = new mongoose.Schema({
    field: {
        type: String,
        required: true
    }
});
const notesSchema = new mongoose.Schema({
    notes: {
        type: String,
        required: true
    }
});

const College = mongoose.model("College", collegeSchema);
const Course = mongoose.model("Course", courseSchema);
const Field = mongoose.model("Field", fieldSchema);
const Notes = mongoose.model("Notes", notesSchema);

module.exports = {
    College,
    Course,
    Field,
    Notes
};