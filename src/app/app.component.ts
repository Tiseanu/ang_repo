import { Component , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ang-app';
  months = ["January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"];
}
