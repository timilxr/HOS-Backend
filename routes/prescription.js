import express from "express";
// import Product from "../models/product.model.js";

import { getPrescriptions, getPrescriptionById, updatePrescription, createPrescription, deletePrescription } from '../controllers/prescriptions.js';

const router = express.Router();

// router.route('/').get((req, res)=>{
//     Product.find();
//     res.send('Hello world');
// })

router.route('/').get(getPrescriptions).post(createPrescription);

router.route('/:id').get(getPrescriptionById).put(updatePrescription).delete(deletePrescription);


export default router;