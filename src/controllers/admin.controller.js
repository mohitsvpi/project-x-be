const Admin = require('../models/admin.model');

const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        return res.status(200).send(admins);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const getAAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const admins = await Admin.findById(id);
        return res.status(200).send(admins);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const addAdmin = async (req, res) => {
    try {
        const admins = await Admin.create(req.body);
        return res.status(201).send({message : "Admin added successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const updateAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const admins = await Admin.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).send({message : "Admin updated successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const deleteAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const admins = await Admin.findByIdAndDelete(id);
        return res.status(200).send({message : "Admin deleted successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

module.exports = {
    getAllAdmins,
    getAAdmin,
    addAdmin,
    updateAdmin,
    deleteAdmin
}