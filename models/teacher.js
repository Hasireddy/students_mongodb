const { mongoose } = require('mongoose');

const TeacherSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },

    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },

    subject: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please use a valid email"]
    }
});

module.exports = mongoose.model("Teacher", TeacherSchema);