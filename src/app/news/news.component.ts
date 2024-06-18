import { Component } from '@angular/core';
import { faCalendar, faUser,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  faCalendar=faCalendar;
  faUser=faUser;
  faArrowRight=faArrowRight;
}
