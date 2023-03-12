const mongoose = require('mongoose')

const tutorialdata = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    DOB: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    contactnum: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    education: {
        type: String,
        require: true
    },
    institute: {
        type: String,
        require: true
    },
    standard: {
        type: String,
        require: true
    },
    subject: {
        type: [String],
        require: true
    },
    totalfee: {
        type: Number,
        require: true
    },
    paidfee: {
        type: Number,
        require: true
    },
    duefee: {
        type: Number,
        require: true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('tutoriallist',tutorialdata)