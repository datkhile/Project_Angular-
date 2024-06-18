import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';
import { Menu5Component } from './menu5/menu5.component';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { Header4Component } from './header4/header4.component';
import { Insurance1Component } from './insurance1/insurance1.component';
import { Insurance2Component } from './insurance2/insurance2.component';
import { Insurance3Component } from './insurance3/insurance3.component';
import { Insurance4Component } from './insurance4/insurance4.component';
import { SliderComponent } from './slider/slider.component';
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


const routes: Routes = [
  { path: 'topbar', component: TopbarComponent },
  { path:'dialogcontentcomponent', component:DialogContentComponent},
  { path: 'navbar', component: NavbarComponent },
  { path: 'header',component:HeaderComponent },
  { path: 'header44',component:Header44Component },
  { path: 'insurance',component:InsuranceComponent},
  {path:'Footer',component:FooterComponent},
  {path:'Footer1',component:Footer1Component},
  {path:'Menu',component:MenuComponent},
  {path:'Menu2',component:Menu2Component},
  {path:'Menu3',component:Menu3Component},
  {path:'Menu4',component:Menu4Component},
  {path:'Menu5',component:Menu5Component},
  {path:'header1',component:Header1Component},
  {path:'header2',component:Header2Component},
  {path:'header3',component:Header3Component},
  { path: 'navbar1', component: Navbar1Component },
  {path:'header4',component:Header4Component},
  { path: 'insurance1',component:Insurance1Component},
  { path: 'insurance2',component:Insurance2Component},
  { path: 'insurance3',component:Insurance3Component},
  { path: 'insurance4',component:Insurance4Component},
  { path: 'insurance44',component:Insurance44Component},
  { path: 'slider',component:SliderComponent},
  { path: 'insurance5',component:Insurance5Component},
  { path: 'navbar2', component: Navbar2Component },
  { path: 'section', component: SectionComponent },
  { path: 'section1', component: Section1Component },
  { path: 'section11', component: Section11Component },
  { path: 'footerstart',component: FooterstartComponent},
  { path: 'images', component:ImagesComponent},
  { path: 'news',component:NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
