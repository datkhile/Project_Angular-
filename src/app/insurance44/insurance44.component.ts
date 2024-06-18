import { Component } from '@angular/core';
import {faUsersLine, faPlus,faMotorcycle, faNotesMedical,faBuilding,faFileCircleExclamation,faShieldVirus } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

@Component({
  selector: 'app-insurance44',
  templateUrl: './insurance44.component.html',
  styleUrl: './insurance44.component.css'
})
export class Insurance44Component {
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

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
