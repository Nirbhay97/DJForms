import FormBuilder from './formBuilder';
import './styles.css';
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
// const schema = {
//     fields: [
//       { name: 'firstName', placeholder: 'First Name', required: true },
//       { name: 'lastName', placeholder: 'Last Name' },
//       { name: 'email', type: 'email', placeholder: 'Email', required: true },
//       { 
//         name: 'company', 
//         placeholder: 'Company Name',
//         condition: { field: 'lastName', value: 'Doe' } 
//       },
//     ]
//   };
  

const schema = {
  fields: [
      { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter your username' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
      { 
          name: 'gender', 
          label: 'Gender', 
          type: 'radio', 
          options: [
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' }
          ] 
      },
      { 
          name: 'interests', 
          label: 'Interests', 
          type: 'checkbox', 
          options: [
              { value: 'coding', label: 'Coding' },
              { value: 'music', label: 'Music' },
              { value: 'sports', label: 'Sports' }
          ] 
      },
      { 
          name: 'country', 
          label: 'Country', 
          type: 'select', 
          options: [
              { value: 'us', label: 'United States' },
              { value: 'ca', label: 'Canada' },
              { value: 'uk', label: 'United Kingdom' }
          ] 
      }
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
