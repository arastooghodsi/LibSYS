import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/area.service';
import { Area } from 'src/app/area';
import { formatCurrency } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  inputForm!: FormGroup;
  countries: Area[] = [];
  forIndex: number = 1;
  isNew: boolean = false;

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.getCountry();
  }

  onSubmit() {
    this.inputForm.reset();
  }

  getCountry(): void {
    this.areaService.getCountry().then((countries: Area[]) => this.countries = countries);
  }

  newCountry(): void {
    this.isNew = true;
  }

  addCountry(newCode: string, newName: string): void {
    let newcountry: Area = {code: newCode, name: newName};
    this.areaService.addCountry(newcountry);
    
  }

}
