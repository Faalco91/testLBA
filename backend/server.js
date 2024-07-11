import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import NextCors from 'nextjs-cors';
import dotenv from 'dotenv'

dotenv.config();
const mongoUri = process.env.MONGODB_URI;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(NextCors());
app.use(bodyParser.json());

//On appel MONGODB_URI à travers mongoUri pour préserver la confidentialité des données permettant la connexion.
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((error) => console.log('Connexion à MongoDB échouée !', error));

const phonesRoutes = require('./routes/phonesRoutes');
app.use('/api/phones', phonesRoutes);

app.listen(PORT, () => console.log(`Le serveur est en cours sur le port ${PORT}`));
