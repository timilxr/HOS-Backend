export const usersData = [
  {
    fullName: 'timi',
    email: 'timi@g.com',
    phone: '0812334444',
    password: 'timi',
    isAdmin: true,
    role: 'doctor',
    toBeConsulted: false
  },
  {
    fullName: 'tobi',
    email: 'tobi@g.com',
    phone: '0812334444',
    password: 'tobi',
    isAdmin: false,
    role: 'patient',
    toBeConsulted: true
  },
  {
    fullName: 'tomi',
    email: 'tomi@g.com',
    phone: '0812334444',
    password: 'tomi',
    isAdmin: false,
    role: 'accountant',
    toBeConsulted: false
  }
];

export const prescriptionsData = [{
  doctorId: '60f483855eb0b052d4a93453',
  patientId: '60f483855eb0b052d4a93454',
  drugs: [{
    prescription: 'Paracetamol 10mg',
    dosage: {
      intake: 2,
      ccassionRate: 3,
      occassion: 'daily',
      spanRate: 10,
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
      ccassionRate: 3,
      occassion: 'daily',
      spanRate: 10,
      span: 'days',
    },
    available: false,}]

}];