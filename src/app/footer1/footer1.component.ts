import { Component,OnInit } from '@angular/core';
import {faMapMarkedAlt, faPhone, faEnvelope,faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrl: './footer1.component.css'
})
export class Footer1Component implements OnInit {
  faMapMarkedAlt = faMapMarkedAlt;
  faEnvelope = faEnvelope;
  faPhone =faPhone;
  fafacebook =faFacebook;
  faTwitter= faTwitter;
  faYoutube=faYoutube;
  faLinkedinIn=faLinkedinIn;
  faPlus=faPlus;

  constructor() {}
  ngOnInit(){
    AOS.init();
  }
}

