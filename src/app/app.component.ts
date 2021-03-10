import { Component , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ang-app';
  todaydate = new Date();
  months = ["January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"];

  displayExtra = true;  
  
  selectedMonth = "";
  changeMonths(selectedValue) {
    console.log("Changed month from the Dropdown");
    console.log(selectedValue);
    this.selectedMonth = selectedValue;
 }
}
