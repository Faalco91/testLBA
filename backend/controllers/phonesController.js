import phones from "../models/phones.js";

//Controller pour récupérer les données
export const getPhone = async (req, res) => {
    try {
        const produits = await phones.find();
        res.json(produits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Controller pour Créer des données
export const createPhone = async (req, res) => {
    const produit = new phones(req.body);
    console.log('Data recues depuis le controller createPhone:', req.body);
    try {
        const savedphones = await produit.save();
        res.json(savedphones);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Controller pour modifier des données
export const updatePhone = async (req, res) => {
    try {
        const updatedphones = await phones.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedphones);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Controller pour supprimer des données
export const deletePhone = async (req, res) => {
    try {
        await phones.findByIdAndDelete(req.params.id);
        res.json({ message: 'phone supprimé' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
