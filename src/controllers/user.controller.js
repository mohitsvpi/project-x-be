const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const getAUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const addUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).send({message : "User added successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).send({message : "User updated successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        return res.status(200).send({message : "User deleted successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

module.exports = {
    getAllUsers,
    getAUser,
    addUser,
    updateUser,
    deleteUser
}