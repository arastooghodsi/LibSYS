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
    this.isProvince = false;
    this.isCity = false;
  }

  onProvince(): void {
    this.isProvince = true;
    this.isCountry = false;
    this.isCity = false;
  }

  onCity(): void {
    this.isCity = true;
    this.isCountry = false;
    this.isProvince = false;
  }
}
