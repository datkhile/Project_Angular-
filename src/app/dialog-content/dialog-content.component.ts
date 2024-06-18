import { Component } from '@angular/core';
import {faLocationDot, faClock, faPhone,faHome,faMapMarkedAlt,faShieldAlt,faEnvelope, faArrowCircleRight, faBarsProgress,faBuilding,faDesktop,faPlus,faUser,faAddressBook, faBars,faTimesCircle,faWifiStrong } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn,faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrl: './dialog-content.component.css',
  host:{
    class:'simple-sidebar'
  }
})
export class DialogContentComponent {
  faLocationDot = faLocationDot;
  faClock = faClock;
  faPhone =faPhone;
  faEnvelope=faEnvelope;
  faMapMarkedAlt=faMapMarkedAlt;
  faYoutube=faYoutube;
  fafacebook =faFacebook;
  faWifiStrong=faWifiStrong;
  faTwitter= faTwitter;
  faInstagram=faInstagram;
  faBarsProgress=faBarsProgress;
  faLinkedinIn=faLinkedinIn;
  faArrowCircleRight=faArrowCircleRight;
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
