import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css']
})
export class Chatbot {

  messages: any[] = [
    { text: 'Hello! How can I help you?', type: 'bot' }
  ];

  userInput = '';

  showForm = false;

  form = {
    name: '',
    email: '',
    phone: ''
  };

  handleOption(option: string) {

    if(option === 'eligibility')
      this.messages.push({ text: 'Eligibility: 12th pass', type: 'bot' });

    if(option === 'fees')
      this.messages.push({ text: 'Fees: 50,000 per year', type: 'bot' });

    if(option === 'apply')
      this.showForm = true;

    if(option === 'documents')
      this.messages.push({ text: 'Documents: Aadhaar, Marksheet', type: 'bot' });

    if(option === 'contact')
      this.messages.push({ text: 'Contact: 9876543210', type: 'bot' });
  }

  sendMessage() {

    if(this.userInput.trim()) {

      this.messages.push({
        text: this.userInput,
        type: 'user'
      });

      this.messages.push({
        text: 'I will help you.',
        type: 'bot'
      });

      this.userInput = '';
    }
  }

  submitForm() {

    this.messages.push({
      text: 'Form Submitted Successfully',
      type: 'bot'
    });

    this.showForm = false;

    this.form = {
      name: '',
      email: '',
      phone: ''
    };
  }

}