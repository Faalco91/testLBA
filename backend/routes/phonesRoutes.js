import express from 'express';
import {
    getPhone,
    createPhone,
    updatePhone,
    deletePhone
  } from '../controllers/phonesController.js';

const router = express.Router();

router.get('/', getPhone);
router.post('/', createPhone);
router.put('/:id', updatePhone);
router.delete('/:id', deletePhone);

export default router;
