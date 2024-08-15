import FormBuilder from './formBuilder';

const schema = {
  fields: [
    { name: 'firstName', placeholder: 'First Name' },
    { name: 'lastName', placeholder: 'Last Name' },
    { name: 'email', type: 'email', placeholder: 'Email' },
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  new FormBuilder(schema, 'formContainer');
});
