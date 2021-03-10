import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { DettagliComponent } from './component/dettagli/dettagli.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroShoppingComponent } from './component/hero-shopping/hero-shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DettagliComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
