import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AreaService } from 'src/app/area.service';
import { City } from 'src/app/area';
import { CITY } from 'src/app/mock-city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

// Variables
inputForm!: FormGroup;
cities: City[] = [];
allCity: City[] = [];
tablesRow: number = CITY.length;
isNew: boolean = false;
isSelect: boolean = false;
codeSelected: string = '';
nameSelected: string = '';
selectedIndex: number = 0;
isCodeDuplicate: boolean = false;
isNameDuplicate: boolean = false;
isDuplicateCity: boolean = false;
searchInput: string = '';
cityList: string = '';
isSearch: boolean = false;


constructor(private areaService: AreaService) {}

ngOnInit(): void {
  this.getCity();
}

onSubmit() {
  this.inputForm.reset();
}

getCity(): void {
  this.areaService.getCity().then((cities: City[]) => this.cities = cities);
}

newCity(): void {
  this.isNew = true;
  this.isSelect = false;
}

addCity(newCode: string, newName: string): void {
  let newcity: City = {code: newCode, name: newName, provinceName: "تهران", countryName: "ایران"};
  this.isDuplicate(newcity);
  if(!this.isDuplicateCity) {
    this.areaService.addCity(newcity);
  }
  this.isSelect = false;
  this.isNew = false;
}

updateCity(newCode: string, newName: string): void {
  let newcity: City = {code: newCode, name: newName, provinceName: "تهران", countryName: "ایران"};
  this.isDuplicate(newcity);
  if(!this.isDuplicateCity) {
    this.areaService.updateCity(newcity, this.selectedIndex);
  }
  this.isSelect = false;
  this.isNew = false;
}

deleteCity(): void {
  this.areaService.deleteCity(this.cities[this.selectedIndex]);
  this.isSelect = false;
  this.isNew = false;
}

inputSearch() {
  this.isSearch = true;
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
  this.codeSelected = this.cities[myIndex].code;
  this.nameSelected = this.cities[myIndex].name;
}

public isDuplicate(city: City): void {
  for(let i = 0; i < CITY.length; i++) {
    if(city.code == this.cities[i].code && i !== this.selectedIndex) {
      this.isCodeDuplicate = true;
      this.isDuplicateCity = true;
      break;
    } if(city.name == this.cities[i].name && i !== this.selectedIndex) {
      this.isNameDuplicate = true;
      this.isDuplicateCity = true;
      break;
    }
  }
  if(this.isCodeDuplicate && this.isNameDuplicate) {
    alert("کد شهر و نام شهر تکراری است، لطفا هر دو را تغییر دهید.");
  }if(this.isCodeDuplicate && !this.isNameDuplicate) {
    alert("کد شهر تکراری است، لطفا کد را تغییر دهید.");
  }if(!this.isCodeDuplicate && this.isNameDuplicate) {
    alert("نام شهر تکراری است، لطفا نام را تغییر دهید.");
  }    
}

}
