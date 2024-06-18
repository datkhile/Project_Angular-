import { Component } from '@angular/core';

@Component({
  selector: 'app-header44',
  templateUrl: './header44.component.html',
  styleUrl: './header44.component.css'
})
export class Header44Component {
    
  animate = false;

  triggerAnimation() {
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 1000); // Adjust the duration as needed
  }
}
