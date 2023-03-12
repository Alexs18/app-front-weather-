import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
