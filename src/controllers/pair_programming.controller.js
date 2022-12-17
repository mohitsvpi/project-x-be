const PP = require('../models/pair_programming.model');

const getAllPP = async (req, res) => {
    try {
        const pp = await PP.find();
        return res.status(200).send(pp);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const getAPP = async (req, res) => {
    try {
        const id = req.params.id;
        const pp = await PP.findById(id);
        return res.status(200).send(pp);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const addPP = async (req, res) => {
    try {
        const pp = await PP.create(req.body);
        return res.status(201).send({message : "PP added successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const updatePP = async (req, res) => {
    try {
        const id = req.params.id;
        const pp = await PP.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).send({message : "PP updated successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const deletePP = async (req, res) => {
    try {
        const id = req.params.id;
        const pp = await PP.findByIdAndDelete(id);
        return res.status(200).send({message : "PP deleted successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

module.exports = {
    getAllPP,
    getAPP,
    addPP,
    updatePP,
    deletePP
}