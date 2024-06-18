import { Component } from '@angular/core';
import {faLocationDot, faClock, faPhone,faHome,faShieldAlt, faBuilding,faDesktop,faPlus,faUser,faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
//  import { MatButtonToggleModule } from '@angular/material/button-toggle';
//  import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  // standalone: true,
  //  imports: [MatButtonToggleModule, MatIconModule],
})
export class NavbarComponent {
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
  collapsed=true;
  
  // showFiller = false;
  
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

