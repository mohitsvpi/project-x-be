const Unit = require('../models/unit.model');

const getAllUnits = async (req, res) => {
    try {
        const units = await Unit.find();
        return res.status(200).send(units);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const getAUnit = async (req, res) => {
    try {
        const id = req.params.id;
        const unit = await Unit.findById(id);
        return res.status(200).send(unit);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const addUnit = async (req, res) => {
    try {
        const unit = await Unit.create(req.body);
        return res.status(201).send({message : "Unit added successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const updateUnit = async (req, res) => {
    try {
        const id = req.params.id;
        const unit = await Unit.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).send({message : "Unit updated successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const deleteUnit = async (req, res) => {
    try {
        const id = req.params.id;
        const unit = await Unit.findByIdAndDelete(id);
        return res.status(200).send({message : "Unit deleted successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

module.exports = {
    getAllUnits,
    getAUnit,
    addUnit,
    updateUnit,
    deleteUnit
}