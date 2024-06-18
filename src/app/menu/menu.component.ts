import { Component } from '@angular/core';

import {faLocationDot, faClock, faPhone,faHome,faShieldAlt, faBuilding,faDesktop,faPlus,faUser,faAddressBook, faBars,faTimesCircle,faWifiStrong } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  host:{
    class:'simple-sidebar'
  }
})
export class MenuComponent {
  faLocationDot = faLocationDot;
  faClock = faClock;
  faPhone =faPhone;
  fafacebook =faFacebook;
  faWifiStrong=faWifiStrong;
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

  
  animate = true;

  triggerAnimation() {
    this.animate = false;
    setTimeout(() => this.animate = true, 10);
  }
  
  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }

  toInsurance(){
    document.getElementById("insurance")?.scrollIntoView({behavior:"smooth"});
  }

  toLifeInsurance(){
    document.getElementById("life-insurance")?.scrollIntoView({behavior:"smooth"});
  }

  toMotorInsurance(){
    document.getElementById("motor-insurance")?.scrollIntoView({behavior:"smooth"});
  }

  toHealthInsurance(){
    document.getElementById("health-insurance")?.scrollIntoView({behavior:"smooth"});
  }

  toRealEstate(){
    document.getElementById("real-estate")?.scrollIntoView({behavior:"smooth"});
  }

  toSoftwareSolution(){
    document.getElementById("Software-Solution")?.scrollIntoView({behavior:"smooth"});
  }

  toClaims(){
    document.getElementById("claims")?.scrollIntoView({behavior:"smooth"});
  }

  toMotorClaims(){
    document.getElementById("motor-claims")?.scrollIntoView({behavior:"smooth"});
  }

  toHealthClaims(){
    document.getElementById("health-claims")?.scrollIntoView({behavior:"smooth"});
  }

  toClientele(){
    document.getElementById("clientele")?.scrollIntoView({behavior:"smooth"});
  }

  toContactus(){
    document.getElementById("contact-us")?.scrollIntoView({behavior:"smooth"});
  }
  
  images = [944 , 1011, 983].map((n)=> '');
  moveClicked =false;

}