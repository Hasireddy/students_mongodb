const express = require('express');
const app = express.Router();

const { getAllTeachers, getOneTeacher, createTeacher, updateTeacher, deleteTeacher } = require('../controllers/teachers_controllers');

app.route("/").get(getAllTeachers).post(createTeacher);

app.route("/:id").get(getOneTeacher).put(updateTeacher).delete(deleteTeacher);


module.exports = app;