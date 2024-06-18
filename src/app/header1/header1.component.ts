import { Component } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrl: './header1.component.css'
})
export class Header1Component {
  images = [944 , 1011, 983].map((n)=> '');
  moveClicked =false;
 

  
  animate = true;

  triggerAnimation() {
    this.animate = false;
    setTimeout(() => this.animate = true, 10);
  }
}
