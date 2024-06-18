import { Component } from '@angular/core';
import {faArrowUpRightFromSquare, faArrowCircleRight, faClock,faLocationDot, faPhone,faHome,faShieldAlt, faBuilding,faDesktop,faPlus,faUser,faAddressBook, faBars,faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrl: './menu4.component.css'
})
export class Menu4Component {
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faClock=faClock;
  faLocationDot=faLocationDot;
  faArrowCircleRight = faArrowCircleRight;
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
