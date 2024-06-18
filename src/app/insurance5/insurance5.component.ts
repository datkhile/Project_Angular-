import { Component } from '@angular/core';
import {faUsersLine, faPlus,faMotorcycle, faNotesMedical,faBuilding,faFileCircleExclamation,faShieldVirus } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

@Component({
  selector: 'app-insurance5',
  templateUrl: './insurance5.component.html',
  styleUrl: './insurance5.component.css'
})
export class Insurance5Component {
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
}
