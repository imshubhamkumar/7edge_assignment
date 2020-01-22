const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    eid: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
    },
    createTime: {
        type: String
    },
    updateTime: {
        type: String
    }
})

const employee = mongoose.model('employee', EmployeeSchema);

module.exports = employee;