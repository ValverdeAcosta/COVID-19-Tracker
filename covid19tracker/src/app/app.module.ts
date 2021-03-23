import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, MainComponent],
  
})
export class AppModule { 
 
}
