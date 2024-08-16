class FormBuilder {
    constructor(schema, containerId) {
      this.schema = schema;
      this.container = document.getElementById(containerId);
      this.form = document.createElement('div');
      this.buildForm();
    }
  
    buildForm() {
      this.schema.fields.forEach(field => {
        // const input = document.createElement('input');

        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        const label = document.createElement('label');
        label.innerText = field.label;
        formGroup.appendChild(label);

        // input.type = field.type || 'text';
        // input.name = field.name;
        // input.placeholder = field.placeholder || '';
        // input.required = field.required || false;
        // input.addEventListener('input', (e) => this.validateField(e.target, field));
        // this.form.appendChild(input);

        if (field.type === 'text' || field.type === 'email' || field.type === 'password') {
          const input = document.createElement('input');
          input.type = field.type;
          input.name = field.name;
          input.placeholder = field.placeholder;
          formGroup.appendChild(input);
        } else if (field.type === 'select') {
          const select = document.createElement('select');
          select.name = field.name;

          field.options.forEach(option => {
              const optionElement = document.createElement('option');
              optionElement.value = option.value;
              optionElement.innerText = option.label;
              select.appendChild(optionElement);
          });

          formGroup.appendChild(select);
        } else if (field.type === 'radio' || field.type === 'checkbox') {
          const optionsContainer = document.createElement('div');
          optionsContainer.className = 'options';

          field.options.forEach(option => {
              const optionLabel = document.createElement('label');
              const input = document.createElement('input');
              input.type = field.type;
              input.name = field.name;
              input.value = option.value;
              optionLabel.appendChild(input);
              optionLabel.append(option.label);
              optionsContainer.appendChild(optionLabel);
          });

          formGroup.appendChild(optionsContainer);
      }

      this.container.appendChild(formGroup);
      });
  
      // const submitButton = document.createElement('button');
      // submitButton.type = 'submit';
      // submitButton.innerText = 'Submit';
      // this.form.appendChild(submitButton);
  
      // this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      // this.container.appendChild(this.form);
    }
  
    // validateField(input, field) {
    //   const error = document.getElementById(`${input.name}-error`);
    //   if (error) error.remove();
  
    //   if (field.required && !input.value.trim()) {
    //     this.showError(input, `${field.name} is required.`);
    //   }
    // }
  
    // showError(input, message) {
    //   const error = document.createElement('div');
    //   error.id = `${input.name}-error`;
    //   error.style.color = 'red';
    //   error.innerText = message;
    //   input.after(error);
    // }
  
    // handleSubmit(e) {
    //   e.preventDefault();
    //   let valid = true;
  
    //   this.schema.fields.forEach(field => {
    //     const input = this.form.querySelector(`[name="${field.name}"]`);
    //     if (field.required && !input.value.trim()) {
    //       this.showError(input, `${field.name} is required.`);
    //       valid = false;
    //     }
    //   });
  
    //   if (valid) {
    //     alert('Form submitted successfully!');
    //   }
    // }
  }
  
  export default FormBuilder;
  



  // conditional logic field
//   buildForm() {
//     this.schema.fields.forEach(field => {
//       const input = document.createElement('input');
//       input.type = field.type || 'text';
//       input.name = field.name;
//       input.placeholder = field.placeholder || '';
//       input.required = field.required || false;
  
//       if (field.condition) {
//         input.style.display = 'none';
//       }
  
//       input.addEventListener('input', (e) => this.validateField(e.target, field));
//       this.form.appendChild(input);
//     });
  
//     this.form.addEventListener('input', (e) => this.handleConditions(e));
//   }
  
//   handleConditions(e) {
//     this.schema.fields.forEach(field => {
//       if (field.condition) {
//         const conditionField = this.form.querySelector(`[name="${field.condition.field}"]`);
//         const targetField = this.form.querySelector(`[name="${field.name}"]`);
  
//         if (conditionField.value === field.condition.value) {
//           targetField.style.display = '';
//         } else {
//           targetField.style.display = 'none';
//         }
//       }
//     });
//   }
  



//Custom Field Types and Extensibility


// import { createCustomField } from './utils';

// buildForm() {
//   this.schema.fields.forEach(field => {
//     let input;

//     if (field.custom) {
//       input = createCustomField(field);
//     } else {
//       input = document.createElement('input');
//       input.type = field.type || 'text';
//       input.name = field.name;
//       input.placeholder = field.placeholder || '';
//       input.required = field.required || false;
//     }

//     this.form.appendChild(input);
//   });
// }

// // utils.js
// export function createCustomField(field) {
//   const input = document.createElement('div');
//   input.innerHTML = `<label>${field.label}</label><input type="${field.type}" name="${field.name}" placeholder="${field.placeholder}" />`;
//   return input;
// }
