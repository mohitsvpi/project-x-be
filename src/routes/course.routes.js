const express = require('express');
const { getAllCourses, addCourse, getACourse } = require('../controllers/course.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/', authMiddleware, getAllCourses);
router.get('/:id', authMiddleware, getACourse);
router.post('/', authMiddleware, addCourse);

module.exports = router;