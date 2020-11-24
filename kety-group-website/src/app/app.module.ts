import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from '@angular/material/sidenav';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from "@angular/material/list";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsPageComponent,
    ServicesPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
