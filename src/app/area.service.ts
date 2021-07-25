import { Injectable } from '@angular/core';
import { COUNTRY } from './mock-country';
import { PROVINCE } from './mock-province';
import { CITY } from './mock-city';
import { Area } from './area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor() { }

  getCountry() {
    return Promise.resolve(COUNTRY);
  }

  addCountry(country: Area) {
    Promise.resolve(COUNTRY).then((countries: Area[]) => countries.push(country));
  }

}
