import { Component } from '@angular/core';
import {faLocationDot, faClock, faPhone,faHome,faShieldAlt,faEnvelope, faBuilding,faDesktop,faPlus,faUser,faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  faLocationDot = faLocationDot;
  faClock = faClock;
  faPhone =faPhone;
  fafacebook =faFacebook;
  faTwitter= faTwitter;
  faInstagram=faInstagram;
  faLinkedinIn=faLinkedinIn;
  faHome=faHome;
  faShieldAlt=faShieldAlt;
  faEnvelope=faEnvelope;
  faBuilding=faBuilding;
  faDesktop=faDesktop;
  faPlus=faPlus;
  faUser=faUser;
  faAddressBook=faAddressBook;
  collapsed=true;
  
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
}



