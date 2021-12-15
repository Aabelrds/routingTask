import { FoodService } from './services/food.service';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItaliaComponent } from './paises/italia/italia.component';
import { VenezuelaComponent } from './paises/venezuela/venezuela.component';
import { EgiptoComponent } from './paises/egipto/egipto.component';
import { JaponComponent } from './paises/japon/japon.component';
import { AustraliaComponent } from './paises/australia/australia.component';
import { FoodComponent } from './paises/food/food.component';


@NgModule({
  declarations: [

    AppComponent,
    ItaliaComponent,
    VenezuelaComponent,
    EgiptoComponent,
    JaponComponent,
    AustraliaComponent,
    FoodComponent

  ],
  imports: [

    BrowserModule,
    AppRoutingModule

  ],
  providers: [ FoodService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
