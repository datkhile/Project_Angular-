import { Component } from '@angular/core';
import {faLocationDot, faClock, faPhone,faHome,faShieldAlt, faBuilding,faDesktop,faPlus,faUser,faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrl: './menu3.component.css'
})
export class Menu3Component {
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
}
