import { Component, AfterViewInit, } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-lifeinsurance',
  templateUrl: './lifeinsurance.component.html',
  styleUrl: './lifeinsurance.component.css'
})
export class LifeinsuranceComponent implements AfterViewInit {

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }

  animate = false;

  triggerAnimation() {
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 1000); // Adjust the duration as needed
  }
}