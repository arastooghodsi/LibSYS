import { Injectable } from '@angular/core';
import { COUNTRY, PROVINCE, CITY } from './mock';
import { Country, Province, City } from './area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor() { }

  // Country Services
  getCountry() {
    return Promise.resolve(COUNTRY);
  }

  addCountry(country: Country) {
    Promise.resolve(COUNTRY).then((countries: Country[]) => countries.push(country));
  }

  updateCountry(country: Country, selectedIndex: number) {
    Promise.resolve(COUNTRY).then((countries: Country[]) => countries[selectedIndex].code = country.code);
    Promise.resolve(COUNTRY).then((countries: Country[]) => countries[selectedIndex].name = country.name);
  }

  deleteCountry(item: Country) {
    COUNTRY.forEach((value, index) => {
      if(value == item)
        COUNTRY.splice(index, 1)
    });
  }

  // Province services
  getProvince() {
    return Promise.resolve(PROVINCE);
  }

  addProvince(province: Province) {
    Promise.resolve(PROVINCE).then((provinces: Province[]) => provinces.push(province));
  }

  updateProvince(province: Province, selectedIndex: number) {
    Promise.resolve(PROVINCE).then((provinces: Province[]) => provinces[selectedIndex].code = province.code);
    Promise.resolve(PROVINCE).then((provinces: Province[]) => provinces[selectedIndex].name = province.name);
    Promise.resolve(PROVINCE).then((provinces: Province[]) => provinces[selectedIndex].countryName = province.countryName);
  }

  deleteProvince(item: Province) {
    PROVINCE.forEach((value, index) => {
      if(value == item)
        PROVINCE.splice(index, 1)
    });
  }

    // City Services
    getCity() {
      return Promise.resolve(CITY);
    }
  
    addCity(city: City) {
      Promise.resolve(CITY).then((cities: City[]) => cities.push(city));
    }
  
    updateCity(city: City, selectedIndex: number) {
      Promise.resolve(CITY).then((cities: City[]) => cities[selectedIndex].code = city.code);
      Promise.resolve(CITY).then((cities: City[]) => cities[selectedIndex].name = city.name);
    }
  
    deleteCity(item: City) {
      CITY.forEach((value, index) => {
        if(value == item)
          CITY.splice(index, 1)
      });
    }
  
}
