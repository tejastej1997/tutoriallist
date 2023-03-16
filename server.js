const experss = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
let tutorialdetails = require('./model')
require('dotenv').config()

const app = experss()
let port = process.env.port || 4000
let username = process.env.mongousername;
let password = process.env.mongopassword;



app.use(experss.json())
app.use(cors({
    origin: "*"
}))

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.hfthgsz.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Data base connected successfully');
    })
    .catch((err) => {
        console.log(err.message);
    })

app.get('/', async (req, res) => {
    return res.json(await tutorialdetails.find())
})

app.post('/', async (req, res) => {

    try {
        const { name, DOB, gender, age, contactnum, email, education, institute, standard, subject, totalfee, paidfee, duefee } = req.body;
        const newStudent = new tutorialdetails({
            name: name,
            DOB: DOB,
            gender: gender,
            age: age,
            contactnum: contactnum,
            email: email,
            education: education,
            institute: institute,
            standard: standard,
            subject: subject,
            totalfee: totalfee,
            paidfee: paidfee,
            duefee: duefee
        })
        newStudent.save()
        return res.json(await tutorialdetails.find())
    }
    catch (err) {
        console.log(err);

    }
})

app.get('/:id', async (req, res) => {
    try {
        return res.json(await tutorialdetails.findById(req.params.id))
    }
    catch (err) {
        console.log(err);
    }

})
app.put('/update/:id', async (req, res) => {

    const { name, DOB, gender, age, contactnum, email, education, institute, standard, subject, totalfee, paidfee, duefee } = req.body;

    try {

        const updatedStudent = new tutorialdetails({
            _id: id,
            name: name,
            DOB: DOB,
            gender: gender,
            age: age,
            contactnum: contactnum,
            email: email,
            education: education,
            institute: institute,
            standard: standard,
            subject: subject,
            totalfee: totalfee,
            paidfee: paidfee,
            duefee: duefee
        })
        await tutorialdetails.findByIdAndUpdate(id, updatedStudent)
        return res.json(await tutorialdetails.find())
    }
    catch (err) {
        console.log(err);

    }


})



app.delete('/:id', async (req, res) => {
    try {
        await tutorialdetails.findByIdAndDelete(req.params.id)
        return res.json(await tutorialdetails.find())
    }
    catch (err) {
        console.log(err)
    }
})


app.listen(port, () => {
    console.log('Port Connected to--> ' + port);

})