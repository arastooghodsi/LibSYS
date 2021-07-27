import { Injectable } from '@angular/core';
import { COUNTRY } from './mock-country';
import { PROVINCE } from './mock-province';
import { CITY } from './mock-city';
import { Area } from './area';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor() { }

  // Country Services
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

  deleteCountry(item: Area) {
    COUNTRY.forEach((value, index) => {
      if(value == item)
        COUNTRY.splice(index, 1)
    });
  }

  // Province services
  getProvince() {
    return Promise.resolve(PROVINCE);
  }

  addProvince(province: Area) {
    Promise.resolve(PROVINCE).then((provinces: Area[]) => provinces.push(province));
  }

  updateProvince(province: Area, selectedIndex: number) {
    Promise.resolve(PROVINCE).then((provinces: Area[]) => provinces[selectedIndex].code = province.code);
    Promise.resolve(PROVINCE).then((provinces: Area[]) => provinces[selectedIndex].name = province.name);
  }

  deleteProvince(item: Area) {
    PROVINCE.forEach((value, index) => {
      if(value == item)
        PROVINCE.splice(index, 1)
    });
  }

  
}
