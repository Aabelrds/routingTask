import { FoodComponent } from './food/food.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';



@NgModule({
  declarations: [
    CountriesComponent,
    FoodComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})




export class PaisesModule { }
