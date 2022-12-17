const IA = require('../models/ia.model');

const getAllIA = async (req, res) => {
    try {
        const ia = await IA.find();
        return res.status(200).send(ia);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const getAIA = async (req, res) => {
    try {
        const id = req.params.id;
        const ia = await IA.findById(id);
        return res.status(200).send(ia);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const addIA = async (req, res) => {
    try {
        const ia = await IA.create(req.body);
        return res.status(201).send({message : "IA added successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const updateIA = async (req, res) => {
    try {
        const id = req.params.id;
        const ia = await IA.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).send({message : "IA updated successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const deleteIA = async (req, res) => {
    try {
        const id = req.params.id;
        const ia = await IA.findByIdAndDelete(id);
        return res.status(200).send({message : "IA deleted successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

module.exports = {
    getAllIA,
    getAIA,
    addIA,
    updateIA,
    deleteIA
}