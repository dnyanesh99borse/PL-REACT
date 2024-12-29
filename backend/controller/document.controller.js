const { College, Course, Branch, Subject, Units, Topics } = require('../models/branch_model/branch_model');
const { ObjectId } = require('mongodb'); // Ensure ObjectId is imported
const { options } = require('../routes/auth.routes');


//  Function to insert colleges
const addColleges = async (req, res) => {
    try {
        const { name } = req.body;
        const college = new College({ name });
        await college.save();
        res.status(201).json(college);
    } catch (error) {
        res.status(500).json({ message: "Failed to add college", error });
    }
};

//  Function to add courses
const addCourse = async (req, res) => {
    try {
        const { name, collegeId } = req.body;
        const course = new Course({ name, collegeId });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: "Failed to add course", error });
    }
}

//  Function to add branches
const addBranch = async (req, res) => {
    const { college, course, branches } = req.body;
    console.log("Request body:", req.body);

    if (!college || !course || !branches || !Array.isArray(branches)) {
        return res.status(400).json({ error: "All fields are required, and branches should be an array." });
    }

    try {
        // Check if the document for the given college and course exists
        const existingBranch = await Branch.findOne({ college, course });
        console.log("Existing branch:", existingBranch);

        if (!existingBranch) {
            // Create a new document if it doesn't exist
            const newBranch = new Branch({ college, course, branches });
            await newBranch.save();
            return res.status(201).json({ message: "Added new college and branches.", data: newBranch });
        }

        // Append only new branches that don't already exist in the database
        const newBranches = branches.filter(branch => !existingBranch.branches.includes(branch));

        if (newBranches.length > 0) {
            existingBranch.branches = existingBranch.branches.concat(newBranches);
            await existingBranch.save();
            return res.status(201).json({ message: "Added new branches.", data: existingBranch });
        }

        // If no new branches were added
        return res.status(400).json({ message: "All branches already exist." });

    } catch (error) {
        console.error("Error adding branches:", error);
        return res.status(500).json({ message: "Failed to add branches.", error });
    }
};

// Function to add subjects
const addSubjects =  async (req, res) => {
    const { college, course, branch, semister ,subjects } = req.body;
    
    if (!college || !course || !branch || !semister || !subjects || !Array.isArray(subjects)) {
        return res.status(400).json({ error: "Branch and subject are required." });
    }
    
    const subjectexist = await Subject.findOne({ college, course, branch, semister });
    console.log("Existing subject:", subjectexist);
    
    try {
        if(!subjectexist){
            const newSubject = new Subject({ college, course, branch, semister, subjects });
            await newSubject.save();
            return res.status(201).json({ message: "Added new subject.", data: newSubject });

        }

        const newSubjects = subjects.filter(subject => !subjectexist.subjects.includes(subject));
        
        if(newSubjects.length > 0){
            subjectexist.subjects = subjectexist.subjects.concat(newSubjects);
            await subjectexist.save();
            return res.status(201).json({ message: "Added new subjects.", data: subjectexist });
        }
        
        return res.status(400).json({ message: "All subjects already exist." });
    } catch (error) {
        res.status(500).json({ message: "Failed to add subject", error });
    }

};

// Function to add units
const addUnits = async (req, res) => {
    const { college, course, branch, semister, subject, units } = req.body;
    console.log("Subject:", subject, "unit:", units);

    if ( !college || !course || !branch || !semister || !subject || !units || !Array.isArray(units)) {
        return res.status(400).json({ error: "Subject and unit are required." });
    }

    try {
        // Check if the subject exists and the unit is already in the units array
        const unitExist = await Units.findOne({ college, course, branch, semister, subject, units: { $in: [units] } });

        if (unitExist) {
            return res.status(400).json({ message: "unit already exists." });
        }

        // If subject exists, add the unit to the existing units array
        const existingSubject = await Units.findOne({ subject });

        if (existingSubject) {
            existingSubject.units.push(unit); // Add unit to the units array
            await existingSubject.save();
            return res.status(200).json({ message: "unit added to existing subject.", data: existingSubject });
        }

        // If subject doesn't exist, create a new document
        const newunit = new Units({ subject: subject, units: units });
        await newunit.save();
        return res.status(201).json({ message: "Added new subject with unit.", data: newunit });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to add unit", error });
    }
};

// Function to Add Topics
const addTopics = async (req, res) => {
    const { title, topics} = req.body;
    console.log("Title:", title, "topics:", topics);

    if(!title || !topics){
        return res.status(400).json({ message: "Title and topics are required." });
    }

    const isTopicExist = await Topics.findOne({
        title: { $regex : title, options : "i"  }
    })
};

// Function to get units
const getUnits = async (req, res) => {
    const subject = req.params.subject;
    console.log("Subject:", subject);

    if (!subject) {
        return res.status(400).json({ error: "Subject is required." });
    }

    try {
        // Find the units for the given subject
        const units = await Units.findOne({ subject: { $regex: new RegExp(subject, "i") } });

        if (!units) {
            return res.status(404).json({ message: `No units found for subject: ${subject}` });
        }

        return res.status(200).json({ message: "units retrieved successfully.", data: units.units });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to fetch unit" });
    }
};

// Function to get branches
const getBranches = async (req, res) => {
    const { college, course } = req.params; // Get college and course from URL params


    if (!college || !course) {
        return res.status(400).json({ error: "College and course are required." });
    }

    try {
        // Use regex for case-insensitive search
        const existingBranch = await Branch.findOne({
            college: { $regex: new RegExp(`^${college}$`, 'i') },
            course: { $regex: new RegExp(`^${course}$`, 'i') }
        });

        if (!existingBranch) {
            return res.status(404).json({ message: "College or course not found." });
        }

        // Return the branches for the given college and course
        return res.status(200).json({ college, course, branches: existingBranch.branches });

    } catch (error) {
        console.error("Error fetching branches:", error);
        return res.status(500).json({ message: "Failed to fetch branches.", error });
    }
};

// Function to get subjects
const getSubjects = async (req, res) => {
    const { branch, semister } = req.params;
    console.log("Branch:", branch, "Semister:", semister);

    // Validate request parameters
    if (!branch || !semister) {
        return res.status(400).json({ message: "Branch and semister are required." });
    }

    try {
        // Case-insensitive search for branch and semister
        const existingSubject = await Subject.findOne({
            branch: { $regex: new RegExp(`^${branch}$`, 'i') },
            semister: semister
        });

        if (!existingSubject) {
            return res.status(404).json({ message: "Branch or semister not found." });
        }

        // Return the matched subjects
        return res.status(200).json({ subjects: existingSubject.subjects });

    } catch (error) {
        console.error("Error fetching subjects:", error);
        return res.status(500).json({ message: "Failed to fetch subjects." });
    }
};

//  Function to get suggestions
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

//  Function to get courses
const getCourses = async (req, res) => {
    try {
        const collegeId = req.params.collegeId; // Extract the collegeId parameter
        console.log("College ID:", collegeId);



        const courses = await Course.find({ collegeId: collegeId }); // Use ObjectId
        console.log("Courses:", courses);

        res.json(courses);
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ message: "Failed to fetch courses", error });
    }
};

// Function to search all collections
const searchAll = async (req, res) => {
    const { query } = req.query;

    // If the 'query' parameter is missing, send a 400 Bad Request response
    if (!query) {
        return res.status(400).json({ message: "Query parameter is required" });
    }

    try {
        // Initialize an empty dictionary to store search results
        const results = {};

        // --- Search in the "Units" collection ---
        const unitsMatches = await Units.find({
            units: { $regex: query, $options: "i" } // Case-insensitive substring matching
        });

        // Add matches to the dictionary under the "Units" schema
        unitsMatches.forEach(unitDoc => {
            const matchedUnits = unitDoc.units.filter(unit =>
                unit.toLowerCase().includes(query.toLowerCase())
            );
            if (matchedUnits.length > 0) {
                results["Units"] = (results["Units"] || []).concat(matchedUnits); // Append matches
            }
        });

        // --- Search in the "Subjects" collection ---
        const subjectMatches = await Subject.find({
            subjects: { $regex: query, $options: "i" }
        });

        // Add matches to the dictionary under the "Subject" schema
        subjectMatches.forEach(subjectDoc => {
            const matchedSubjects = subjectDoc.subjects.filter(subject =>
                subject.toLowerCase().includes(query.toLowerCase())
            );
            if (matchedSubjects.length > 0) {
                results["Subject"] = (results["Subject"] || []).concat(matchedSubjects); // Append matches
            }
        });

        // Additional schema searches (e.g., Branch, Course, College) can be added here
        // Each schema's matches should be added to the `results` dictionary

        // Send the aggregated results in dictionary format
        return res.status(200).json({
            message: "Search results",
            results // Include the aggregated search results as a dictionary
        });
    } catch (error) {
        // Log any errors that occur during the search process
        console.error(error);
        // Send a 500 Internal Server Error response if an error occurs
        return res.status(500).json({ message: "Search failed", error });
    }
};









module.exports = {
    addColleges,
    getSuggestions,
    addCourse,
    getCourses,
    addBranch,
    getBranches,
    addSubjects,
    getSubjects,
    addUnits,
    getUnits,
    searchAll
};  //exporting the function to be used in other files.