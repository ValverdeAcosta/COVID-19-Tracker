import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExclamationTriangle, faSkull, faVirus  } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, MainComponent],
  
})
export class AppModule { 
  faExclamationTriangle = faExclamationTriangle;
  faSkull = faSkull;
  faVirus = faVirus;
}
