import { CountriesComponent } from './paises/countries/countries.component';
import { VenezuelaComponent } from './paises/venezuela/venezuela.component';
import { JaponComponent } from './paises/japon/japon.component';
import { ItaliaComponent } from './paises/italia/italia.component';
import { EgiptoComponent } from './paises/egipto/egipto.component';
import { AustraliaComponent } from './paises/australia/australia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FoodComponent } from './paises/australia/food/food.component';


const routes:Routes = [
  {
    path:'',
    component:CountriesComponent,
    pathMatch:'full'
  },
  {
    path:'australia',
    component:AustraliaComponent,
    children:[
      {
        path:'food',
        component:FoodComponent

      }
    ]
  },
  {
    path:'egipto',
    component:EgiptoComponent,
  },
  {
    path:'italia',
    component:ItaliaComponent,
  },
  {
    path:'japon',
    component:JaponComponent,
  },
  {
    path:'venezuela',
    component:VenezuelaComponent,
  },
  {
    path:'**',
    redirectTo:'',
  },

]







@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
