import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { CarouselModule } from 'primeng/carousel'; 
import { ButtonModule } from 'primeng/button'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { FooterComponent } from './footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';
// import { PmdSidebarModule} from 'pmd-angular-bootstrap/sidebar';
// import { PmdNavbarModule } from 'pmd-angular-bootstrap/navbars';
// import { PmdCollapseModule } from 'pmd-angular-bootstrap/collapse';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';
import { Menu5Component } from './menu5/menu5.component';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { TooltipModule } from 'primeng/tooltip';
import { Header4Component } from './header4/header4.component';
import { Insurance1Component } from './insurance1/insurance1.component';
import { Insurance2Component } from './insurance2/insurance2.component';
import { Insurance3Component } from './insurance3/insurance3.component';
import { SliderComponent } from './slider/slider.component';
import { Insurance4Component } from './insurance4/insurance4.component';
import { Insurance5Component } from './insurance5/insurance5.component';
import { TopbarComponent } from './topbar/topbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { Header44Component } from './header44/header44.component';
import { Insurance44Component } from './insurance44/insurance44.component';
import { SectionComponent } from './section/section.component';
import { Section1Component } from './section1/section1.component';
import { Footer1Component } from './footer1/footer1.component';
import { Section11Component } from './section11/section11.component';
import { FooterstartComponent } from './footerstart/footerstart.component';
import { ImagesComponent } from './images/images.component';
import { NewsComponent } from './news/news.component';
import { LifeinsuranceComponent } from './lifeinsurance/lifeinsurance.component';


const routes: Routes = [
  // Define your routes here
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    InsuranceComponent,
    FooterComponent,
    MenuComponent,
    Menu2Component,
    Menu3Component,
    Menu4Component,
    Menu5Component,
    Header1Component,
    Header2Component,
    Header3Component,
    Navbar1Component,
    Header4Component,
    Insurance1Component,
    Insurance2Component,
    Insurance3Component,
    SliderComponent,
    Insurance4Component,
    Insurance5Component,
    TopbarComponent,
    Navbar2Component,
    DialogContentComponent,
    Header44Component,
    Insurance44Component,
    SectionComponent,
    Section1Component,
    Footer1Component,
    Section11Component,
    FooterstartComponent,
    ImagesComponent,
    NewsComponent,
    LifeinsuranceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    TooltipModule,
    BrowserAnimationsModule,
    MatDialogModule,
    // PmdSidebarModule,
    // PmdNavbarModule,
    // PmdCollapseModule,
    MatButtonModule,
    MatSidenavModule,
    ButtonModule, 
        CarouselModule, 
        FormsModule,
        

        RouterModule.forRoot(routes, {
          scrollPositionRestoration: 'enabled', // Scrolls to top when navigating to a new route
          anchorScrolling: 'enabled', // Smooth scroll to anchor
        }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
