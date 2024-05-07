import { Component } from '@angular/core';
import {faMapMarkedAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faMapMarkedAlt = faMapMarkedAlt;
  faEnvelope = faEnvelope;
  faPhone =faPhone;
  fafacebook =faFacebook;
  faTwitter= faTwitter;
  faYoutube=faYoutube;
  faLinkedinIn=faLinkedinIn
}
