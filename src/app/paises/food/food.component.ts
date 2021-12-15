import { FoodService } from './../../services/food.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent{

  australianFood!:string[];
  egyptianFood!:string[];
  italianFood!:string[];
  japaneseFood!:string[];
  venezuelanFood!:string[];
  food!:string[];

  actualRoute!:string;

  constructor(private foodservice:FoodService, private route: Router) {

      this.australianFood = foodservice.australianFood;
      this.egyptianFood = foodservice.egyptianFood;
      this.italianFood = foodservice.italianFood;
      this.japaneseFood = foodservice.japaneseFood;
      this.venezuelanFood = foodservice.venezuelanFood;

      switch (this.route.url) {
        case '/australia/food': this.food = this.australianFood;
          break;
        case '/egipto/food': this.food = this.egyptianFood;
          break;
        case '/italia/food': this.food = this.italianFood;
          break;
        case '/japon/food': this.food = this.japaneseFood;
          break;
        case '/venezuela/food': this.food = this.venezuelanFood;
          break;

        default:
          break;
      }

   }



}
