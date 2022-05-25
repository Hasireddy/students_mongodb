const { reatart } = require('nodemon');
const Teachers = require('../models/teacher') //In teacher.js in models there is an teacher object model.

const getAllTeachers = async(req, res) => {
    try {
        const teachers = await Teachers.find();
        res.status(200).json({
            data: teachers
        })
    } catch {
        es.status(500).json({
            success: false,
            error: err
        })
    }
};

const getOneTeacher = async(req, res) => {
    try {
        const teachers = await Teachers.findById(req.params.id);
        res.status(200).json({
            data: teachers
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err,
            message: `User with id ${req.params.id} not found`
        })
    }
};


const createTeacher = async(req, res) => {
    const { name, lastName, subject, email } = req.body;
    console.log(req.body);
    try {
        const teachers = await Teachers.create({ name, lastName, subject, email })
        res.json({ teachers: teachers })
    } catch (err) {
        res.json({
            success: false,
            error: err
        })
    }
};

const updateTeacher = async(req, res) => {
    // const { name, lastName, subject, email } = req.body;
    // const { id } = req.params;
    console.log(req.body);
    try {
        const teachers = await await Teachers.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json({
            teachers: teachers
        })
    } catch (err) {
        res.json({
            success: false,
            error: err
        })
    }
}

const deleteTeacher = async(req, res) => {
    try {
        const teachers = await Teachers.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: "Student deleted"
        })
    } catch (err) {
        res.json({
            success: false,
            error: err
        })

    }
};

module.exports = { getAllTeachers, getOneTeacher, createTeacher, updateTeacher, deleteTeacher };