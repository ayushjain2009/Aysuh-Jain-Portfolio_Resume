import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  formData = {
    name: '',
    email: '',
    address: '',
    message: ''
  };

  constructor() { }

  // Method to handle form submission (optional)
  submitForm() {
    // Implement form submission logic here
    console.log('Form submitted:', this.formData);
  }
}