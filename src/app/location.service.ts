import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { COUNTRY } from './mock-country';
import { PROVINCE } from './mock-province';
import { CITY } from './mock-city';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCountry() {
    return Promise.resolve(COUNTRY);
  }

}
