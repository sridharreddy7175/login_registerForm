const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
//geeting data

router.get('/', (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
})


router.post('/', async (req, res) => {

    //Checking if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already Exists');

    //Hash passwords

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try {
        const savedUser = await user.save();
        res.status(200).send(savedUser)
    }
    catch{
        res.status(500).send(err)
    }
});

//Login
router.post('/login', async (req, res) => {

    //Checking if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is  not found');

    //password is correct

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");

    res.send("Logged in!")

})


module.exports = router;