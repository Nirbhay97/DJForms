class FormBuilder {
    constructor(schema, containerId) {
      this.schema = schema;
      this.container = document.getElementById(containerId);
      this.form = document.createElement('form');
      this.buildForm();
    }
  
    buildForm() {
      this.schema.fields.forEach(field => {
        const input = document.createElement('input');
        input.type = field.type || 'text';
        input.name = field.name;
        input.placeholder = field.placeholder || '';
        this.form.appendChild(input);
      });
  
      const submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.innerText = 'Submit';
      this.form.appendChild(submitButton);
  
      this.container.appendChild(this.form);
    }
  }
  
  export default FormBuilder;
  