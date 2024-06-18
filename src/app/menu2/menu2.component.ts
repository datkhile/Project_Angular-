import { Component } from '@angular/core';
import {faLocationDot, faClock, faPhone,faHome,faShieldAlt, faBuilding,faDesktop,faPlus,faUser,faAddressBook, faBars,faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrl: './menu2.component.css'
})
export class Menu2Component {
  faLocationDot = faLocationDot;
  faClock = faClock;
  faPhone =faPhone;
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
