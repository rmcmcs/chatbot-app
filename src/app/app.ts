import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userInput = '';
  messages: any[] = [];
  isTyping = false;
  step = 0;

  constructor() {
    this.startChat();
  }

  startChat() {
    this.messages.push({ text: "🎓 Welcome to M.Sc Computer Science Admission Process!", type: 'bot' });
    this.messages.push({ text: "How can I help you today?", type: 'bot' });
    this.messages.push({ text: "Are you interested in taking admission? (Type YES or NO)", type: 'bot' });
    this.step = 1;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const msg = this.userInput.toLowerCase();

    this.messages.push({ text: this.userInput, type: 'user' });
    this.userInput = '';

    this.isTyping = true;

    setTimeout(() => {
      this.isTyping = false;
      this.handleFlow(msg);
    }, 100);
  }

  handleFlow(msg: string) {

    if (this.step === 1) {

      if (msg.includes('yes')) {

        this.messages.push({ text: "Great choice 🎉", type: 'bot' });

        this.messages.push({
          text: `
          You can ask about:
          <ul>
            <li>📘 Eligibility</li>
            <li>💰 Fees</li>
            <li>📄 Documents</li>
            <li>📚 Course</li>
            <li>💼 Career</li>
            <li>📞 Contact</li>
            <li>📝 Admission</li>
            <li>⏳ Duration</li>
          </ul>
          `,
          type: 'bot'
        });

        this.step = 2;
      }

      else if (msg.includes('no')) {

        this.messages.push({
          text: "You might miss a great career opportunity in AI, Data Science & Software Development 🚀",
          type: 'bot'
        });

        this.messages.push({
          text: "Type YES anytime if you change your mind 👍",
          type: 'bot'
        });
      }

      else {
        this.messages.push({ text: "Please type YES or NO 😊", type: 'bot' });
      }
    }

    else if (this.step === 2) {

      if (msg.includes('eligibility') || msg.includes('marks') || msg.includes('qualification'))
        this.messages.push({
          text: `
          📘 Eligibility:
          <ul>
            <li>BCS with 50% marks</li>
            <li>B.Sc Computer Science with 50%</li>
            <li>B.E / B.Tech (CS/IT) with 50%</li>
            <li>B.Sc IT / Computer Science with 50%</li>
            <li>B.Voc (Software Development / IT) with 50%</li>
          </ul>
          `,
          type: 'bot'
        });

      else if (msg.includes('fees') || msg.includes('fee') || msg.includes('cost'))
        this.messages.push({ text: "💰 Fees: ₹50,000/year.", type: 'bot' });

      else if (msg.includes('documents') || msg.includes('required'))
        this.messages.push({ text: "📄 Documents: Aadhaar, Marksheet, Photo.", type: 'bot' });

      else if (msg.includes('contact') || msg.includes('call') || msg.includes('help') || msg.includes('problem'))
        this.messages.push({ text: "📞 For any queries, contact: 9922326981 / 7499264277", type: 'bot' });

      else if (msg.includes('admission') || msg.includes('apply') || msg.includes('process'))
        this.messages.push({ text: "📝 Admission: Visit college or apply directly.", type: 'bot' });

      else if (msg.includes('course') || msg.includes('subjects'))
        this.messages.push({ text: "📚 Course: AI, ML, Cloud, DevOps, Angular.", type: 'bot' });

      else if (msg.includes('career') || msg.includes('job'))
        this.messages.push({ text: "💼 Career: Developer, AI Engineer, Data Scientist.", type: 'bot' });

      else if (msg.includes('duration') || msg.includes('years'))
        this.messages.push({ text: "⏳ Duration: 2 Years.", type: 'bot' });

      else {
        this.messages.push({
          text: "😊 Ask about Eligibility, Fees, Documents, Course, Career, Contact, Admission, Duration.",
          type: 'bot'
        });
      }
    }
  }
}