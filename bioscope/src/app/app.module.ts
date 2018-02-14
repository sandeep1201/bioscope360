import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppbootstrapModule } from './appbootstrap/appbootstrap.module';
import { routes } from './app-routing';



import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EntertainmentComponent,
    AboutComponent,
    HomeComponent,
    TopMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppbootstrapModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
