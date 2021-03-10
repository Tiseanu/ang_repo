import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlbumsComponent } from './albums/albums.component';
import { FooterComponent } from './footer/footer.component';
import { NewDirectiveDirective } from './new-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumsComponent,
    FooterComponent,
    NewDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
