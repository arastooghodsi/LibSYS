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

  updateCountry(country: Area, selectedIndex: number) {
    Promise.resolve(COUNTRY).then((countries: Area[]) => countries[selectedIndex].code = country.code);
    Promise.resolve(COUNTRY).then((countries: Area[]) => countries[selectedIndex].name = country.name);
  }

  deleteCountry(selectedIndex: number) {
    for(let i = selectedIndex; i<COUNTRY.length; i++) {
      Promise.resolve(COUNTRY).then((countries: Area[]) => countries[i] = countries[i+1]);
    }
  }

}
