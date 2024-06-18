import { Component } from '@angular/core';



@Component({ 
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    images = [944 , 1011, 983].map((n)=> '');
    moveClicked =false;
   
   
  }
