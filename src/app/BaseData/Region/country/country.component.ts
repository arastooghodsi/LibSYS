import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/area';
import { AreaService } from 'src/app/area.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  formInput!: FormGroup;

  countries: Country[] = [];
  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.formInput = new FormGroup({
      'countryCode': new FormControl(null, Validators.required),
      'countryName': new FormControl(null, Validators.required)
    });
    this.getCountry();
  }

  getCountry(): void {
    this.areaService.getCountry().then((countries: Country[]) => this.countries = countries);
  }

}
