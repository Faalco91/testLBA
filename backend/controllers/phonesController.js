import phones from "../models/phones.js";

export const getPhone = async (req, res) => {
    try {
        const produits = await phones.find();
        res.json(produits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createPhone = async (req, res) => {
    const produit = new phones(req.body);
    try {
        const savedphones = await produit.save();
        res.status(201).json(savedphones);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updatePhone = async (req, res) => {
    try {
        const updatedphones = await phones.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedphones);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePhone = async (req, res) => {
    try {
        await phones.findByIdAndDelete(req.params.id);
        res.json({ message: 'phones supprimé' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
