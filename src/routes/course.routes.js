const express = require('express');
const { getAllCourses, addCourse, getACourse } = require('../controllers/course.controller');
const router = express.Router();

router.get('/', getAllCourses);
router.get('/:id', getACourse);
router.post('/', addCourse);

module.exports = router;