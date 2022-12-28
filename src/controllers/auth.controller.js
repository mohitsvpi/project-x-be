const Admin = require("../models/admin.model");
const User = require("../models/user.model");
const jwt = require('jsonwebtoken');

const newToken = (user) => {
    const token = jwt.sign({user}, process.env.JWT_SECRET_KEY, {expiresIn: "7d"})
    return token;
}


const register = async (req, res) => {
    try {
        let user;
        const userType = req.body.email.split('@')[1] === 'masaischool.com' ? 'admin' : 'user';
        if (userType === 'admin') {
            user = await Admin.findOne({email : req.body.email});
            if (user) {
                return res.status(200).send({message : "User already registered"})
            }
            else{
                user = await Admin.create(req.body);
                return res.status(200).send(user);
            }
        }
        else{
            user = await User.findOne({email : req.body.email});
            if (user) {
                return res.status(200).send({message : "User already registered"})
            }
            else{
                user = await User.create(req.body);
                return res.status(200).send(user);
            }
        }
        
        
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}



const login = async (req, res) => {
    try {
        const userType = req.body.email.split('@')[1] === 'masaischool.com' ? 'admin' : 'user';
        if (userType === 'admin') {
            let user = await Admin.findOne({email : req.body.email});
            if (!user){
                return res.status(404).send({message : 'Invalid email or password'});
            }
            const password = await user.checkPassword(req.body.password);
            if (!password) {
                return res.status(404).send({message : 'Invalid email or password'});
            }
            const token = newToken({email: req.body.email, id : user._id})
            return res.status(200).send({token});
        }
        else{
            let user = await User.findOne({email : req.body.email});
            if (!user){
                return res.status(404).send({message : 'Invalid email or password'});
            }
            const password = await user.checkPassword(req.body.password);
            if (!password) {
                return res.status(404).send({message : 'Invalid email or password'});
            }
            const token = newToken({email: req.body.email, id : user._id})
            return res.status(200).send({token});
        }
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

module.exports = {
    login,
    register
}