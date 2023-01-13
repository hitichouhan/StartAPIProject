import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsRepository } from './repository/filmsRepository';
import { HomeComponent } from './ViewPage/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [FilmsRepository],
  bootstrap: [AppComponent],
})
export class AppModule {}
