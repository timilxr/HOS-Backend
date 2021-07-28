export const usersData = [
  {
    full_name: 'timi',
    email: 'timi@g.com',
    phone: '0812334444',
    password: 'timi',
    admin: true,
    role: 'doctor',
    to_be_consulted: false
  },
  {
    full_name: 'tobi',
    email: 'tobi@g.com',
    phone: '0812334444',
    password: 'tobi',
    admin: false,
    role: 'patient',
    to_be_consulted: true
  },
  {
    full_name: 'tomi',
    email: 'tomi@g.com',
    phone: '0812334444',
    password: 'tomi',
    admin: false,
    role: 'accountant',
    to_be_consulted: false
  }
];

export const prescriptionsData = [{
  doctor_id: '60f483855eb0b052d4a93453',
  patient_id: '60f483855eb0b052d4a93454',
  drugs: [{
    prescription: 'Paracetamol 10mg',
    dosage: {
      intake: 2,
      occassion_rate: 3,
      occassion: 'daily',
      span_rate: 10,
      span: 'days',
    },
    available: false,
    // price: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
    // isPaid: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    // paidAt: {
    //   type: Date,
    // },
    // paymentMethod: {
    //   type: String,
    //   required: true,
    //   default: 'cash',
    // },
    // paymentResult: {
    //   amount: { type: Number },
    //   currency: { type: String },
    //   customer: {
    //     name: { type: String },
    //     email: { type: String },
    //     phone_number: { type: String },
    //   },
    //   flw_ref: { type: String },
    //   status: { type: String },
    //   tx_ref: { type: Date },
    //   transaction_id: { type: Number }
    // },
    // isDelivered: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    // deliveredAt: {
    //   type: Date,
    // },
  },
  {
    prescription: 'Paracetamol 20mg',
    dosage: {
      intake: 2,
      occassion_rate: 3,
      occassion: 'daily',
      span_rate: 10,
      span: 'days',
    },
    available: false,}]

}];