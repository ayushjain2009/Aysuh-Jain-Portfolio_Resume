import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  texts: string[] = ["Frontend Developer", "Web Developer"];
  currentTextIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;

  ngOnInit(): void {
    this.type();
  }

  type() {
    const currentText = this.texts[this.currentTextIndex];
    const currentLength = this.isDeleting ? this.currentCharIndex - 1 : this.currentCharIndex + 1;
    document.getElementById('animated-text')!.innerHTML = currentText.substring(0, currentLength);

    if (!this.isDeleting && currentLength === currentText.length) {
      setTimeout(() => this.isDeleting = true, 2000);
    } else if (this.isDeleting && currentLength === 0) {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
    }

    this.currentCharIndex = currentLength;
    const delay = this.isDeleting ? 100 : 200;
    setTimeout(() => this.type(), delay);
  }
}
