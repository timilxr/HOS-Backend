import Prescription from '../models/prescription.model.js';
// import data from '../prescriptionData.js';


export const getPrescriptions = async (req, res) => {
    try{
        // prescription.insertMany(data);
        const prescriptions = await Prescription.find();
        console.log(prescriptions);
        res.status(200).json(prescriptions);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'Error: No prescription found'});
    }
}

export const getPrescriptionById = async (req, res) => {
    try{
        const prescription = await Prescription.findById(req.params.id);
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
        console.log(prescription);
        res.status(200).json(prescription);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'prescription not deleted'});
    }
}

export const createPrescription = async (req, res) => {
    const details = req.body;
    // const data = getPrescriptions();
    // details.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;

    const newprescription = new Prescription(details);
    try{
        const prescription = await newprescription.save();
        // console.log(prescriptions);
        res.status(200).json(prescription);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'Error creating prescription'});
    }
}

export const updatePrescription = async (req, res) => {
    const {doctorId, patientId, drugs, checked, totalPrice, totalPricePaid} = req.body;
    const id = req.params.id;
    try{
        const prescription = await Prescription.findById(id);
        prescription.doctorId = doctorId;
        prescription.prescription = prescription;
        prescription.patientId = patientId;
        prescription.drugs = drugs;
        prescription.checked = checked;
        prescription.totalPrice = totalPrice;
        prescription.totalPricePaid = totalPricePaid;
        // console.log(prescriptions);
        try{
            const newprescription = await prescription.save();
            res.status(200).json(newprescription);
        }
        catch(error){
            res.status(400).json({message: error.message, info: 'prescription not updated'})
        }
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'prescription not found'});
    }
}