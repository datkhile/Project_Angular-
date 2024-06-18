import { Component } from '@angular/core';
import {faUsersLine, faPlus,faMotorcycle, faNotesMedical,faBuilding,faFileCircleExclamation,faShieldVirus } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
@Component({
  selector: 'app-section11',
  templateUrl: './section11.component.html',
  styleUrl: './section11.component.css'
})
export class Section11Component {
  faUsersLine=faUsersLine;
  faPlus=faPlus;
  faMotorcycle=faMotorcycle;
  faNotesMedical=faNotesMedical;
  faBuilding=faBuilding;
  faFileCircleExclamation=faFileCircleExclamation;
  faShieldVirus=faShieldVirus

   constructor() {}
   ngOnInit(){
     AOS.init();
   }

  
  animate = true;

  triggerAnimation() {
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 1000);  // Animation duration
  }
}
