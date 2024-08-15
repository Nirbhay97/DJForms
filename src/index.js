import FormBuilder from './formBuilder';

// testing for without validation
// const schema = {
//   fields: [
//     { name: 'firstName', placeholder: 'First Name' },
//     { name: 'lastName', placeholder: 'Last Name' },
//     { name: 'email', type: 'email', placeholder: 'Email' },
//   ]
// };

// testing with validations
// const schema = {
//     fields: [
//       { name: 'firstName', placeholder: 'First Name', required: true },
//       { name: 'lastName', placeholder: 'Last Name' },
//       { name: 'email', type: 'email', placeholder: 'Email', required: true },
//     ]
//   };


//for conditional fields and logics
const schema = {
    fields: [
      { name: 'firstName', placeholder: 'First Name', required: true },
      { name: 'lastName', placeholder: 'Last Name' },
      { name: 'email', type: 'email', placeholder: 'Email', required: true },
      { 
        name: 'company', 
        placeholder: 'Company Name',
        condition: { field: 'lastName', value: 'Doe' } 
      },
    ]
  };
  

  //testing custom field
//   const schema = {
//     fields: [
//       { name: 'firstName', placeholder: 'First Name', required: true },
//       { name: 'lastName', placeholder: 'Last Name' },
//       { name: 'email', type: 'email', placeholder: 'Email', required: true },
//       { 
//         name: 'profilePicture', 
//         label: 'Profile Picture',
//         type: 'file', 
//         custom: true 
//       },
//     ]
//   };
  
  
document.addEventListener('DOMContentLoaded', () => {
  new FormBuilder(schema, 'formContainer');
});
