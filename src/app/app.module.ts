import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './BaseData/Region/country/country.component';
import { ProvinceComponent } from './BaseData/Region/province/province.component';
import { CityComponent } from './BaseData/Region/city/city.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './body/content/content.component';
import { MenuBarComponent } from './body/menu-bar/menu-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    ProvinceComponent,
    CityComponent,
    SearchFilterPipe,
    NavbarComponent,
    ContentComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
