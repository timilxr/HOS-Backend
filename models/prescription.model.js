import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    patientId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'patients'
    },
    drugs: [
        {
            prescription: { type: String, required: true },
            dosage: {
                intake: Number,
                occassionRate: Number,
                occassion: String,
                spanRate: Number,
                span: String,
            },
            available: { type: Boolean, default: false },
            price: {
                type: Number,
                required: true,
                default: 0.0,
            },
            isPaid: {
                type: Boolean,
                required: true,
                default: false,
            },
            paidAt: {
                type: Date,
            },
            paymentMethod: {
                type: String,
                required: true,
                default: 'cash',
            },
            paymentResult: {
                amount: { type: Number },
                currency: { type: String },
                customer: {
                    name: { type: String },
                    email: { type: String },
                    phone_number: { type: String },
                },
                flw_ref: { type: String },
                status: { type: String },
                tx_ref: { type: Date },
                transaction_id: { type: Number }
            },
            isDelivered: {
                type: Boolean,
                required: true,
                default: false,
            },
            deliveredAt: {
                type: Date,
            },
        }
    ],
    checked: { type: Boolean, default: false },
    totalPricePaid: {
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    }
}, {
    timestamps: true,
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

export default Prescription;