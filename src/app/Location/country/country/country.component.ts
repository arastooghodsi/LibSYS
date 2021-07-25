import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LocationService } from 'src/app/location.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: Location[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    this.locationService.getCountry().then((countries: Location[]) => this.countries = countries);
  }



}
