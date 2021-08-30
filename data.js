export const usersData = [
  {
    full_name: 'timi',
    email: 'timi@g.com',
    phone: '0812334444',
    password: 'timi',
    admin: true,
    role: 'doctor',
    // to_be_consulted: false,
  },
  {
    full_name: 'tobi',
    email: 'tobi@g.com',
    phone: '0812334444',
    password: 'tobi',
    admin: false,
    role: 'patient',
    // to_be_consulted: false,
  },
  {
    full_name: 'tomi',
    email: 'tomi@g.com',
    phone: '0812334444',
    password: 'tomi',
    admin: false,
    role: 'accountant',
    // to_be_consulted: false,
  },
  { 
    role: "nurse",
    full_name: "Simi Titi",
    email: "simi@g.com",
    phone: "08031246871",
    password: 'simi',
    admin: false 
  }
];

export const prescriptionsData = [{
  patient_id: '60f483855eb0b052d4a93454',
  // doctor_id: '60f483855eb0b052d4a93453',
  drugs: [{
    prescription: 'Paracetamol 10mg',
    dosage: {
      intake: 2,
      occassion_rate: 3,
      occassion: 'daily',
      span_rate: 10,
      span: 'days',
    }
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
    available: false,
  }
  ]

}];