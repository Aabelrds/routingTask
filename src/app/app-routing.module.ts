import { CountriesComponent } from './paises/countries/countries.component';
import { VenezuelaComponent } from './paises/venezuela/venezuela.component';
import { JaponComponent } from './paises/japon/japon.component';
import { ItaliaComponent } from './paises/italia/italia.component';
import { EgiptoComponent } from './paises/egipto/egipto.component';
import { AustraliaComponent } from './paises/australia/australia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FoodComponent } from './paises/food/food.component';


const routes:Routes = [
  {
    path:'',
    component:CountriesComponent,
    pathMatch:'full'
  },
  {
    path:'australia',
    component:AustraliaComponent,
    // hijo de la ruta primera, que hace concatener localhosts/austrlia/food
    //le pasamos el que queremos que renderice cuando llgue a esa ruta component:foo
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

    children:[
      {
        path:'food',
        component:FoodComponent

      }
    ]
  },
  {
    path:'italia',
    component:ItaliaComponent,
    children:[
      {
        path:'food',
        component:FoodComponent

      }
    ]
  },
  {
    path:'japon',
    component:JaponComponent,
    children:[
      {
        path:'food',
        component:FoodComponent

      }
    ]
  },

  {
    path:'venezuela',
    component:VenezuelaComponent,
    children:[
      {
        path:'food',
        component:FoodComponent

      }
    ]
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
