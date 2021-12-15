import { VenezuelaComponent } from './paises/venezuela/venezuela.component';
import { JaponComponent } from './paises/japon/japon.component';
import { ItaliaComponent } from './paises/italia/italia.component';
import { EgiptoComponent } from './paises/egipto/egipto.component';
import { AustraliaComponent } from './paises/australia/australia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './paises/food/food.component';


const routes:Routes = [

  {
    path:'australia',
    component:AustraliaComponent,
    children:[
      {
        path:'food',
        pathMatch:'full',
        component:FoodComponent,
      }
    ]
  },
  {
    path:'egipto',
    component:EgiptoComponent,
    children:[
      {
        path:'food',
        pathMatch:'full',
        component:FoodComponent,

      }
    ]
  },
  {
    path:'italia',
    component:ItaliaComponent,
    children:[
      {
        path:'food',
        pathMatch:'full',
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
        pathMatch:'full',
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
        pathMatch:'full',
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
