import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
// import passport from 'passport';
// import usePassport from './config/passport';


dotenv.config();

const PORT = process.env.PORT || 5000;
const uri = process.env.URI;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());

app.use(cors());
// import Product from './models/product.model.js';

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(()=>console.log("Database connected successfully"))
.catch(error=>console.log(error.message));

// mongoose.set("useFindAndModify", false);

// import OrderRouter from './routes/orders.js';
import UserRouter from './routes/users.js';
import PrescriptionRouter from './routes/prescription.js';

// app.use(passport.initialize());
// usePassport();

app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`));

app.use('/prescriptions', PrescriptionRouter)
app.use('/users', UserRouter)
// app.use('/orders', OrderRouter)

app.get('/', (req, res)=>res.send('Hello From Express!!'));