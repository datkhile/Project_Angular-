import { Component } from '@angular/core';
import {faUsersLine, faPlus,faMotorcycle, faNotesMedical,faBuilding,faFileCircleExclamation,faShieldVirus } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

@Component({
  selector: 'app-insurance2',
  templateUrl: './insurance2.component.html',
  styleUrl: './insurance2.component.css'
})
export class Insurance2Component {
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
