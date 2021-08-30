import Prescription from '../models/prescription.model.js';
// import mongoose from 'mongoose';
// import { prescriptionsData } from '../data.js';


export const getPrescriptions = async (req, res) => {
    // Prescription.insertMany(prescriptionsData);
    try{
        const prescriptions = await Prescription.find({},{createdAt: 0, updatedAt: 0, __v: 0});
        // console.log(prescriptions);
        res.status(200).json(prescriptions);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'Error: No prescription found'});
    }
}

export const getPrescriptionById = async (req, res) => {
    try{
        const prescription = await Prescription.findById({_id: req.params.id},{createdAt: 0, updatedAt: 0, __v: 0});
        console.log(prescription);
        res.status(200).json(prescription);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'prescription not found'});
    }
}

export const deletePrescription = async (req, res) => {
    try{
        const prescription = await Prescription.findByIdAndDelete(req.params.id);
        // console.log(prescription);
        res.status(200).json(prescription);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'prescription not deleted'});
    }
}

export const createPrescription = async (req, res) => {
    let details = req.body;
    // details.doctor_id = mongoose.Types.ObjectId('');
    // console.log(details);
    // details.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;

    const newprescription = new Prescription({...details});
    // console.log(newprescription);
    try{
        await newprescription.save();
        const prescriptions = await Prescription.find();
        // console.log(prescriptions);
        res.status(200).json({ one: {...newprescription._doc}, all: prescriptions});
    }
    catch(error){
        console.log(err);
        res.status(400).json({message: error.message, info: 'Error creating prescription'});
    }
}

export const updatePrescription = async (req, res) => {
    // console.log(req.body);
    const {doctor_id, patient_id, accountant_id, to_be_consulted, drugs, last_checked_by, total_price, total_price_paid} = req.body;
    const id = req.params.id;
        await Prescription.findById(id)
        .then(prescription=>{  
                // ...prescription._doc,
                // ...req.body,
                prescription.doctor_id = doctor_id ? doctor_id : prescription.doctor_id;
                prescription.patient_id = patient_id ? patient_id : prescription.patient_id;
                prescription.accountant_id = accountant_id ? accountant_id : prescription.accountant_id;
                prescription.to_be_consulted = to_be_consulted != undefined ? to_be_consulted : prescription.to_be_consulted;
                prescription.drugs = drugs ? drugs : prescription.drugs;
                prescription.total_price = total_price ? total_price : prescription.total_price;
                prescription.total_price_paid = total_price_paid ? total_price_paid : prescription.total_price_paid;
                // prescription.doctor_id: doctor_id ? doctor_id : prescription.doctor_id;
                // _id: prescription._doc._id,
                // patient_id: prescription._doc.patient_id,
                prescription.last_checked_by = last_checked_by ? last_checked_by : ''
            // const newPresc = new Prescription({
            //     ...presc
            // })
            console.log(prescription, 'me');
            prescription.save()
            .then(nprescription => {
                console.log(nprescription, 'me2');
                // const newprescription = await Prescription.find();
                // console.log(newprescription);
                res.status(200).json({one: nprescription});
            })
            .catch(error=>{
                console.log(error);
                res.status(400).json({message: error.message, info: 'prescription not updated'})
            })
        })
        .catch(error=>{
        res.status(400).json({message: error.message, info: 'prescription not found'});
        });
}