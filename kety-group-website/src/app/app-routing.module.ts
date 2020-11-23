import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ServicesPageComponent} from "./components/services-page/services-page.component";
import {ProjectsPageComponent} from "./components/projects-page/projects-page.component";
import {AboutUsPageComponent} from "./components/about-us-page/about-us-page.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'services-page', component: ServicesPageComponent },
  { path: 'projects-page', component: ProjectsPageComponent },
  { path: 'about-us-page', component: AboutUsPageComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
