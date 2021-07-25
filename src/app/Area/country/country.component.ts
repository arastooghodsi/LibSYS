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
  isSelect: boolean = false;
  codeSelected: string = '';
  nameSelected: string = '';
  selectedIndex: number = 0;

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
    this.isSelect = false;
  }

  addCountry(newCode: string, newName: string): void {
    let newcountry: Area = {code: newCode, name: newName};
    this.areaService.addCountry(newcountry);
  }

  updateCountry(newCode: string, newName: string): void {
    let newcountry: Area = {code: newCode, name: newName};
    this.areaService.updateCountry(newcountry, this.selectedIndex);
  }

  deleteCountry(): void {
    this.areaService.deleteCountry(this.selectedIndex);
  }

  selectRow(myIndex: number): void {
    this.isSelect = true;
    this.isNew = false;
    this.selectedIndex = myIndex;
    this.codeSelected = this.countries[myIndex].code;
    this.nameSelected = this.countries[myIndex].name;
  }

}
