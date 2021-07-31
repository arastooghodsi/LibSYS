import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AreaService } from 'src/app/area.service';
import { Country } from 'src/app/country';
import { COUNTRY } from 'src/app/mock-country';
import { PROVINCE } from 'src/app/mock-province';
import { Province } from 'src/app/area';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  // Variables
  inputForm!: FormGroup;
  provinces: Province[] = [];
  allProvince: Province[] = [];
  tablesRow: number = PROVINCE.length;
  isNew: boolean = false;
  isSelect: boolean = false;
  codeSelected: string = '';
  nameSelected: string = '';
  selectedIndex: number = 0;
  isCodeDuplicate: boolean = false;
  isNameDuplicate: boolean = false;
  isDuplicateProvince: boolean = false;
  searchInput: string = '';
  provinceList: string = '';
  isSearch: boolean = false;
  searchCountry: string = '';
  countries: Country[] = COUNTRY;
  isSearchCountry: boolean = false;

  constructor(private areaService: AreaService) {}

  ngOnInit(): void {
    this.getProvince();
  }

  onSubmit() {
    this.inputForm.reset();
  }

  getProvince(): void {
    this.areaService.getProvince().then((provinces: Province[]) => this.provinces = provinces);
  }

  newProvince(): void {
    this.isNew = true;
    this.isSelect = false;
  }

  addProvince(newCode: string, newName: string, countryProvince: string): void {
    let newprovince: Province = {code: newCode, name: newName, countryName: countryProvince};
    this.isDuplicate(newprovince);
    if(!this.isDuplicateProvince) {
      this.areaService.addProvince(newprovince);
    }
    this.isSelect = false;
    this.isNew = false;
  }

  updateProvince(newCode: string, newName: string, countryProvince: string): void {
    let newprovince: Province = {code: newCode, name: newName, countryName: countryProvince};
    this.isDuplicate(newprovince);
    if(!this.isDuplicateProvince) {
      this.areaService.updateProvince(newprovince, this.selectedIndex);
    }
    this.isSelect = false;
    this.isNew = false;
  }

  deleteProvince(): void {
    this.areaService.deleteProvince(this.provinces[this.selectedIndex]);
    this.isSelect = false;
    this.isNew = false;
  }

  inputSearch() {
    this.isSearch = true;
    this.isSearchCountry = true;
  //   let input = document.getElementById(this.searchInput);
  //   let ul = document.getElementById(this.provinceList);
  //   let li = ul?.getElementsByTagName("li");
  //   for (let i = 0; i < li.length; i++) {
  //     a = li[i].getElementsByTagName("a")[0];
  //     let txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(input) > -1) {
  //         li[i].style.display = "";
  //     } else {
  //         li[i].style.display = "none";
  //     }
  // }
  }

  selectRow(myIndex: number): void {
    this.isSelect = true;
    this.isNew = false;
    this.selectedIndex = myIndex;
    this.codeSelected = this.provinces[myIndex].code;
    this.nameSelected = this.provinces[myIndex].name;
  }

  public isDuplicate(province: Province): void {
    for(let i = 0; i < PROVINCE.length; i++) {
      if(province.code == this.provinces[i].code && i !== this.selectedIndex) {
        this.isCodeDuplicate = true;
        this.isDuplicateProvince = true;
        break;
      } if(province.name == this.provinces[i].name && i !== this.selectedIndex) {
        this.isNameDuplicate = true;
        this.isDuplicateProvince = true;
        break;
      }
    }
    if(this.isCodeDuplicate && this.isNameDuplicate) {
      alert("کد استان و نام استان تکراری است، لطفا هر دو را تغییر دهید.");
    }if(this.isCodeDuplicate && !this.isNameDuplicate) {
      alert("کد استان تکراری است، لطفا کد را تغییر دهید.");
    }if(!this.isCodeDuplicate && this.isNameDuplicate) {
      alert("نام استان تکراری است، لطفا نام را تغییر دهید.");
    }    
  }

}
