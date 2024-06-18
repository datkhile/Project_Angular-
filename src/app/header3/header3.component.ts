import { Component } from '@angular/core';
import {faUsersLine, faMotorcycle, faPhone,faHome,faNotesMedical, faBuilding,faDatabase,faPlus,faUser,faAddressBook, faBars,faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrl: './header3.component.css'
})
export class Header3Component {
  faUsersLine = faUsersLine;
  faMotorcycle = faMotorcycle;
  faPhone =faPhone;
  fafacebook =faFacebook;
  faTwitter= faTwitter;
  faInstagram=faInstagram;
  faLinkedinIn=faLinkedinIn;
  faHome=faHome;
  faNotesMedical=faNotesMedical;
  faBuilding=faBuilding;
  faDatabase=faDatabase;
  faPlus=faPlus;
  faUser=faUser;
  faAddressBook=faAddressBook;
  faTimesCircle=faTimesCircle;
  faBars=faBars;

  animate = true;

  triggerAnimation() {
    this.animate = false;
    setTimeout(() => this.animate = true, 10);
  }
}
