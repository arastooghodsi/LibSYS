import { Injectable } from '@angular/core';
import { Country } from './area';
import { COUNTRY } from './area-mock';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  flag: boolean = true;
  constructor() { }

  getCountry() {
    return Promise.resolve(COUNTRY);
  }

  addCountry(country: Country): void {
    Promise.resolve(COUNTRY).then((countries: Country[]) => countries.push(country));
  }

  updateCountry(country: Country, index: number): any{
    for(let i = 0; i<COUNTRY.length; i++) {
      if(COUNTRY[i] == country) {
        this.flag = false;
        break;
      } else {
        continue;
      }
    }
    if(this.flag) {
      Promise.resolve(COUNTRY).then((countries: Country[]) => countries.push(country));
    }
    return this.flag;
  }
}
