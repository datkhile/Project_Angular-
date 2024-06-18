import { Component } from '@angular/core';
import {faUsersLine, faPlus,faMotorcycle, faNotesMedical,faBuilding,faFileCircleExclamation,faShieldVirus } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

interface Car { 
  id?: string; 
  name?: string; 
  description?: string; 
  price?: number; 
  imageUrl?: string;
} 

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {
  faUsersLine=faUsersLine;
  faPlus=faPlus;
  faMotorcycle=faMotorcycle;
  faNotesMedical=faNotesMedical;
  faBuilding=faBuilding;
  faFileCircleExclamation=faFileCircleExclamation;
  faShieldVirus=faShieldVirus

  // constructor() {}
  // ngOnInit(){
  //   AOS.init();
  // }

  
  animate = true;

  triggerAnimation() {
    this.animate = false;
    setTimeout(() => this.animate = true, 10);
  }

  cars: Car[] = []; 
  
    constructor() { } 
  
    ngOnInit() { 
        this.cars = [ 
            { 
                id: '1', 
                imageUrl: 'https://as2.ftcdn.net/v2/jpg/04/99/41/85/1000_F_499418554_lKT1eHT4tTnYp8qCvB0R7hakyb3aLEAd.jpg',
                name: 'Life Insurance', 
                description:"Life insurance is a protection for your loved ones. It can act as a solution to your child’s college fees, daughter’s marriage, tax saver and family cover after death. Buy once and be worry free for whole life.",
                price: 800, 
            }, 
            { 
                id: '2', 
                imageUrl: 'https://as2.ftcdn.net/v2/jpg/07/57/44/33/1000_F_757443332_vK3ARevQsTIdO1PQOV3EMaxXCnkbyY9i.jpg',
                name: 'Motor Insurance', 
                description: "Motor insurance protects against loss of due to theft, traffic accidents or fire, explosion etc. Also it is mandatory by the Indian Government.", 
                price: 1500, 
            }, 
            { 
                id: '3', 
                imageUrl:"https://as1.ftcdn.net/v2/jpg/06/84/99/32/1000_F_684993228_TWxAtHB5oYEic9UDYea0LoyikoufXNrd.jpg" ,
                name: 'Health Insurance', 
                description: "No one plans to get sick or hurt, but most people need medical care at some point. Health insurance helps pay these costs.", 
                price: 10000, 
            }, 
            { 
              id: '4', 
              imageUrl:"https://as1.ftcdn.net/v2/jpg/06/06/15/70/1000_F_606157019_8Twvq2CaTYBWKeNXiMLR8OJB3Q56afl4.jpg",
              name: 'Real Estate', 
              description: 'The most preferred and assured form of investing money and getting the best returns', 
              price: 10000, 
          }, 
        ]; 
    } 
}
