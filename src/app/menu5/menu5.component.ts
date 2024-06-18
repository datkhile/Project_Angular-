import { Component } from '@angular/core';
import {faArrowUpRightFromSquare, faArrowCircleRight, faList,faHome,faShieldAlt, faBuilding,faDesktop,faPlus,faUser,faAddressBook, faBars,faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu5',
  templateUrl: './menu5.component.html',
  styleUrl: './menu5.component.css'
})
export class Menu5Component {
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faArrowCircleRight = faArrowCircleRight;
  faList =faList;
  fafacebook =faFacebook;
  faTwitter= faTwitter;
  faInstagram=faInstagram;
  faLinkedinIn=faLinkedinIn;
  faHome=faHome;
  faShieldAlt=faShieldAlt;
  faBuilding=faBuilding;
  faDesktop=faDesktop;
  faPlus=faPlus;
  faUser=faUser;
  faAddressBook=faAddressBook;
  faTimesCircle=faTimesCircle;
  faBars=faBars;
}
