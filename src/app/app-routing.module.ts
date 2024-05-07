import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'header',component:HeaderComponent },
  { path: 'footer',component:FooterComponent},
  {path:'Footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
