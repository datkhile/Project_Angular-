import { Component,OnInit } from '@angular/core';
import {faUsersLine, faPlus,faMotorcycle, faNotesMedical,faBuilding,faFileCircleExclamation,faShieldVirus } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.css'
})
export class InsuranceComponent implements OnInit {
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
