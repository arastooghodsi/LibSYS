import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/area.service';
import { COUNTRY } from 'src/app/mock-country';
import { FormGroup } from '@angular/forms';
import { Country } from 'src/app/area';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  // Variables
  inputForm!: FormGroup;
  countries: Country[] = [];
  allCounrties: Country[] = [];
  tablesRow: number = COUNTRY.length;
  isNew: boolean = false;
  isSelect: boolean = false;
  codeSelected: string = '';
  nameSelected: string = '';
  selectedIndex: number = 0;
  isCodeDuplicate: boolean = false;
  isNameDuplicate: boolean = false;
  isDuplicateCountry: boolean = false;
  searchInput: string = '';
  isSearch: boolean = false;

  constructor(private areaService: AreaService) {}

  ngOnInit(): void {
    this.getCountry();
  }

  onSubmit() {
    this.inputForm.reset();
  }

  getCountry(): void {
    this.areaService.getCountry().then((countries: Country[]) => this.countries = countries);
  }

  newCountry(): void {
    this.isNew = true;
    this.isSelect = false;
  }

  addCountry(newCode: string, newName: string): void {
    let newcountry: Country = {code: newCode, name: newName};
    this.isDuplicate(newcountry);
    if(!this.isDuplicateCountry) {
      this.areaService.addCountry(newcountry);
    }
    this.isSelect = false;
    this.isNew = false;
  }

  updateCountry(newCode: string, newName: string): void {
    let newcountry: Country = {code: newCode, name: newName};
    this.isDuplicate(newcountry);
    if(!this.isDuplicateCountry) {
      this.areaService.updateCountry(newcountry, this.selectedIndex);
    }
    this.isSelect = false;
    this.isNew = false;
  }

  deleteCountry(): void {
    this.areaService.deleteCountry(this.countries[this.selectedIndex]);
    this.isSelect = false;
    this.isNew = false;
  }

  inputSearch() {
    this.isSearch = true;
  }

  selectRow(myIndex: number): void {
    this.isSelect = true;
    this.isNew = false;
    this.selectedIndex = myIndex;
    this.codeSelected = this.countries[myIndex].code;
    this.nameSelected = this.countries[myIndex].name;
  }

  public isDuplicate(country: Country): void {
    for(let i = 0; i < COUNTRY.length; i++) {
      if(country.code == this.countries[i].code && i !== this.selectedIndex) {
        this.isCodeDuplicate = true;
        this.isDuplicateCountry = true;
        break;
      } if(country.name == this.countries[i].name && i !== this.selectedIndex) {
        this.isNameDuplicate = true;
        this.isDuplicateCountry = true;
        break;
      }
    }
    if(this.isCodeDuplicate && this.isNameDuplicate) {
      alert("کد کشور و نام کشور تکراری است، لطفا هر دو را تغییر دهید.");
    }if(this.isCodeDuplicate && !this.isNameDuplicate) {
      alert("کد کشور تکراری است، لطفا کد را تغییر دهید.");
    }if(!this.isCodeDuplicate && this.isNameDuplicate) {
      alert("نام کشور تکراری است، لطفا نام را تغییر دهید.");
    }    
  }

}
