const Course = require('../models/course.model');

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        return res.status(200).send(courses);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const getACourse = async (req, res) => {
    try {
        const id = req.params.id;
        const course = await Course.findById(id);
        return res.status(200).send(course);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const addCourse = async (req, res) => {
    try {
        const courses = await Course.create(req.body);
        return res.status(201).send({message : "Course added successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const updateCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const courses = await Course.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).send({message : "Course updated successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const courses = await Course.findByIdAndDelete(id);
        return res.status(200).send({message : "Course deleted successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

module.exports = {
    getAllCourses,
    getACourse,
    addCourse,
    updateCourse,
    deleteCourse
}