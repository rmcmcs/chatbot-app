import { Component, OnInit } from '@angular/core';

interface Message {
  text: string;
  type: 'user' | 'bot';
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  userInput = '';
  messages: Message[] = [];
  showForm = false;

  form = {
    name: '',
    email: '',
    phone: ''
  };

  ngOnInit() {
    this.messages.push({
      text: 'Welcome to MSc Computer Science admission process. How can I help you?',
      type: 'bot'
    });
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ text: this.userInput, type: 'user' });
    this.handleResponse(this.userInput);
    this.userInput = '';
  }

  handleOption(option: string) {
    this.messages.push({ text: option, type: 'user' });
    this.handleResponse(option);
  }

  handleResponse(input: string) {
    input = input.toLowerCase();

    if (input.includes('eligibility')) {
      this.botReply('You need BSc Computer Science with 50%.');
    }
    else if (input.includes('fees')) {
      this.botReply('Fees is ₹50,000 per year.');
    }
    else if (input.includes('apply')) {
      this.botReply('Fill the form below.');
      this.showForm = true;
    }
    else if (input.includes('documents')) {
      this.botReply('Marksheet, ID, photo required.');
    }
    else if (input.includes('contact')) {
      this.botReply('Call 9876543210');
    }
    else {
      this.botReply('Please select options.');
    }
  }

  botReply(text: string) {
    this.messages.push({ text, type: 'bot' });
  }

  submitForm() {
    this.botReply('Form submitted successfully!');
    this.showForm = false;
  }
}