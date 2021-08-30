import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    patient_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    doctor_id: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'User'
    },
    last_checked_by: { type: String },
    to_be_consulted: {
        type: Boolean,
        required: true,
        default: false,
      },
    accountant_id: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'User'
    },
    // schedule: {
    //     type: Date,
    //     required: true,
    //     default: new Date()
    //     // ref: 'User'
    // },
    drugs: [
        {
            description: { type: String },
            prescription: { type: String },
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
            paid: {
                type: Boolean,
                required: true,
                default: false,
            },
            paid_at: {
                type: Date,
            },
            payment_method: {
                type: String,
                required: true,
                default: 'cash',
            },
            payment_result: {
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
            delivered: {
                type: Boolean,
                required: true,
                default: false,
            },
            delivered_at: {
                type: Date,
            },
        }
    ],
    total_price_paid: {
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