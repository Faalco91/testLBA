import express from 'express';
import {
    getPhone,
    createPhone,
    updatePhone,
    deletePhone
  } from '../controllers/phonesController.js';

//Le routeur va gérer les requêtes HTTP vers les différentes routes de l'API que l'on a créer
const router = express.Router();

//Ce sont les différentes routes de l'API que l'on associe aux controllers 
//qui à leur tour vont gérer ce qu'on appelle la logique métier (gérer le traitement des données)
router.get('/', getPhone);
router.post('/', createPhone);
router.put('/:id', updatePhone);
router.delete('/:id', deletePhone);

export default router;
