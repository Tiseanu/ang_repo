import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponent} from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlbumsComponent } from './albums/albums.component';
import { FooterComponent } from './footer/footer.component';
import { NewDirectiveDirective } from './new-directive.directive';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumsComponent,
    FooterComponent,
    NewDirectiveDirective,
    ContactusComponent,
    AboutusComponent,
    HomeComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
