import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import styles from './addCardComponent.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};

const createPhone = async (newPhone) => {
  const res = await fetch('http://localhost:3000/api/phones', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPhone),

  });
  if (!res.ok) {
    throw new Error("Echec d'ajout du produit.");
  }
  return res.json();
};


export default function AddCardComponent({ onPhoneCreate }) {
  const [open, setOpen] = useState(false);
  const [identif, setIdentif] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [warrantyYears, setWarrantyYears] = useState('');
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState('');


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    const newPhone = {
      _id: identif,
      name,
      warranty_years: warrantyYears,
      rating,
      price,
      available: available === 'true',
    };

    try {
      const createdPhone = await createPhone(newPhone);
      if (onPhoneCreate) {
        onPhoneCreate(createdPhone);
      }
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary" startIcon={<AddIcon />}>
        Ajouter un téléphone
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ textAlign: 'center' }} id="modal-modal-title" variant="h6" component="h2">
            Ajouter un nouveau téléphone
          </Typography>
          <Box component="form" sx={{ mt: 4 }}>
          <TextField
                label="ID"
                value={identif}
                onChange={(e) => setIdentif(e.target.value)}
                fullWidth
                sx={{ mb: 3 }}
              />  
              <TextField
                label="Disponibilité"
                value={available}
                onChange={(e) => setAvailable(e.target.value)}
                fullWidth
                sx={{ mb: 3 }}
              />   
            <TextField
              label="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              sx={{ mb: 3 }}
            />
            <TextField
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              fullWidth
              sx={{ mb: 3 }}
            />
            <TextField
              label="Garantie (années)"
              value={warrantyYears}
              onChange={(e) => setWarrantyYears(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Stack sx={{ mb: 2 }} spacing={1.5}>
              <TextField
                label="Note"
                type="number"
                inputProps={{ step: 0.5, min: 0, max: 5 }}
                value={rating}
                onChange={(e) => setRating(parseFloat(e.target.value))}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Rating className={styles.addRating}
                name="rating"
                value={rating}
                precision={0.5}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </Stack>
            <TextField
              label="Prix"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
              sx={{ mb: 6, mt: 3 }}
            />
            <Button onClick={handleSave} variant="contained" color="primary">
              Sauvegarder
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
