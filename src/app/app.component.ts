import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LTMSPrototype';

  isCountry: boolean = false;
  isProvince: boolean = false;
  isCity: boolean = false;

  onCountry(): void {
    this.isCountry = true;
  }

  onProvince(): void {
    this.isProvince = true;
  }

  onCity(): void {
    this.isCity = true;
  }
}
