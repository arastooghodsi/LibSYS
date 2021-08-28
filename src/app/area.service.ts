import { Injectable } from '@angular/core';
import { Country } from './area';
import { COUNTRY } from './area-mock';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  codeFlag: boolean = true;
  nameFlag: boolean = true;
  constructor() { }

  getCountry() {
    return Promise.resolve(COUNTRY);
  }

  addCountry(country: Country): void {
    // for(let i=0; i<COUNTRY.length; i++) {
    //   if(COUNTRY[i].countryCode == country.countryCode) {
    //     this.codeFlag = false;
    //     break;
    //   } else if(COUNTRY[i].countryName == country.countryName) {
    //     this.nameFlag = false;
    //     break;
    //   } else {
    //     continue;
    //   }
    // }
    // if(this.codeFlag && this.nameFlag) {
      Promise.resolve(COUNTRY).then((countries: Country[]) => countries.push(country));
    //   return 0;
    // } else if(!this.codeFlag && this.nameFlag) {
    //   return 1;
    // } else if(this.codeFlag && !this.nameFlag) {
    //   return 2;
    // } else {
    //   return 3;
    // }
  }

  updateCountry(country: Country, index: number): any{
    // for(let i = 0; i<COUNTRY.length; i++) {
    //   if(COUNTRY[i].countryCode == country.countryCode) {
    //     // this.flag = false;
    //     break;
    //   } else {
    //     continue;
    //   }
    // }
    // if(this.flag) {
    //   Promise.resolve(COUNTRY).then((countries: Country[]) => countries[index].countryCode = country.countryCode);
    //   Promise.resolve(COUNTRY).then((countries: Country[]) => countries[index].countryName = country.countryName);
    // }
    // return this.flag;
  }
}
