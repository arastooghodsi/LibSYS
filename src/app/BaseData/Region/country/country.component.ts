import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Country } from 'src/app/area';
import { COUNTRY } from 'src/app/area-mock';
import { AreaService } from 'src/app/area.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  inputForm!: FormGroup;
  // isSelected: boolean = false;
  // selectedCountry: Country = {countryCode: 'YHN', countryName: 'ایران'};
  selectedCountry!: Country;
  selectedIndex!: number;

  countries: Country[] = [];

  newCountry: Country = {
    countryCode: '',
    countryName: ''
  }

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      'countryCode': new FormControl(null, Validators.required),
      'countryName': new FormControl(null, Validators.required)
    });
    this.getCountry();
  }

  onSubmit() {
    console.log(this.inputForm);
    this.newCountry.countryCode = this.inputForm.value.countryCode;
    this.newCountry.countryName = this.inputForm.value.countryName;
  }

  selectRow(index: number): void {
    // this.isSelected = true;
    this.selectedIndex = index;
    this.newCountry.countryCode = COUNTRY[index].countryCode;
    this.newCountry.countryName = COUNTRY[index].countryName;
  }

  getCountry(): void {
    this.areaService.getCountry().then((countries: Country[]) => this.countries = countries);
  }

  add():void {
    this.areaService.addCountry(this.newCountry);
  }

  update(): void {
    let flag = this.areaService.updateCountry(this.newCountry, this.selectedIndex);
    if(!flag) {
      alert("این مقادیر تکراریست.")
    }
  }

}
