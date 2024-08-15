import FormBuilder from '../src/formBuilder';

test('it should create form fields based on schema', () => {
  document.body.innerHTML = '<div id="formContainer"></div>';

  const schema = {
    fields: [{ name: 'firstName', placeholder: 'First Name' }]
  };

  new FormBuilder(schema, 'formContainer');

  const input = document.querySelector('input[name="firstName"]');
  expect(input).toBeTruthy();
  expect(input.placeholder).toBe('First Name');
});
