export const CONTACT_PEOPLE = [
  { entity: 'Advisory', name: 'Prayag Agarwal', email: 'prayag.agarwal@edasprojects.com', phone: '+91 97681 46860' },
  { entity: 'Construction & villas', name: 'Shailesh Dhere', email: 'shailesh.dhere@edasprojects.com', phone: '+91 99751 35552' },
  { entity: 'Site operations', name: 'Pralhad Kharat', email: 'operations@edasprojects.com', phone: '+91 87679 56623' },
];

export const CONTACT_OFFICES = [
  {
    city: 'Mumbai',
    address: 'Office 01 & 02, Sai Datta Apartment, Bal Govind Das Road, Dadar, Mumbai 400028',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sai+Datta+Apartment+Bal+Govind+Das+Road+Dadar+Mumbai',
  },
  {
    city: 'Miraj',
    address: 'Office 105 & 106, Imperial Square, Ramaudyan Road, Miraj, Sangli 416410',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Imperial+Square+Ramaudyan+Road+Miraj',
  },
];

// export const CONTACT_FORM = {
//   email: 'coordination@edasprojects.com',
//   fields: [
//     { id: 'g-name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
//     { id: 'g-email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
//     { id: 'g-phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
//     { id: 'g-topic', label: 'This is about', options: ['Advisory', 'Construction', 'A villa on my plot', 'Something else'] },
//   ],
//   messageId: 'coo-msg',
//   submitLabel: 'Send message',
// };

export const CONTACT_FORM = {
  id: 'contact',
  title: 'General contact', // used in the email subject
  email: 'coordination@edasprojects.com', // shown to visitors if sending fails
  fields: [
    { id: 'g-name', name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
    { id: 'g-email', name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
    { id: 'g-phone', name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
    { id: 'g-topic', name: 'topic', label: 'This is about', options: ['Advisory', 'Construction', 'A villa on my plot', 'Something else'] },
  ],
  messageId: 'coo-msg',
  submitLabel: 'Send message',
};
