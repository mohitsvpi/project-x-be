const Batch = require('../models/batch.model');

const getAllBatches = async (req, res) => {
    try {
        const batches = await Batch.find();
        return res.status(200).send(batches);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const getABatch = async (req, res) => {
    try {
        const id = req.params.id;
        const batches = await Batch.findById(id);
        return res.status(200).send(batches);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const addBatch = async (req, res) => {
    try {
        const batches = await Batch.create(req.body);
        return res.status(201).send({message : "Batch added successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}


const updateBatch = async (req, res) => {
    try {
        const id = req.params.id;
        const batches = await Batch.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).send({message : "Batch updated successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

const deleteBatch = async (req, res) => {
    try {
        const id = req.params.id;
        const batches = await Batch.findByIdAndDelete(id);
        return res.status(200).send({message : "Batch deleted successfully"});
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
}

module.exports = {
    getAllBatches,
    getABatch,
    addBatch,
    updateBatch,
    deleteBatch
}