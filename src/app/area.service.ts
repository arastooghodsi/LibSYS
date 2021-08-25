import { Injectable } from '@angular/core';
import { COUNTRY } from './area-mock';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor() { }

  getCountry() {
    return Promise.resolve(COUNTRY);
  }
}
