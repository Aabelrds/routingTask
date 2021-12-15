import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private _australianFood: string[] = [
    'Akudjira',
    'ostras',
    'frog cake',
    'Davidsons Plum',
    'Desert Lime',
  ];

  public get australianFood(): string[] {

    return [ ...this._australianFood ];
  }
  public set australianFood(value: string[]) {
    this._australianFood = value;
  }

  private _egyptianFood: string[] = [
    'Ful Medammes',
    'El Molokheya',
    'Kushari'
  ];

  public get egyptianFood(): string[] {
    return [ ...this._egyptianFood ];
  }
  public set egyptianFood(value: string[]) {
    this._egyptianFood = value;
  }

  private _italianFood: string[] = [
    'Pizza',
    'Focaccia',
    'Pasta',
    'Calzone'
  ];

  public get italianFood(): string[] {
    return [ ...this._italianFood ];
  }
  public set italianFood(value: string[]) {
    this._italianFood = value;
  }

  private _japaneseFood: string[] = [
    'Gyoza',
    'Hamachi kama',
    'kushiyaki',
    'Unagi',
    'Ramen'
  ];

  public get japaneseFood(): string[] {
    return [... this._japaneseFood];
  }
  public set japaneseFood(value: string[]) {
    this._japaneseFood = value;
  }

  private _venezuelanFood: string[] = [
    'Pabellon',
    'Hallaca',
    'Asado Negro',
    'Pastel de chucho',
    'Arepa'
  ];

  public get venezuelanFood(): string[] {
    return [... this._venezuelanFood];
  }
  public set venezuelanFood(value: string[]) {
    this._venezuelanFood = value;
  }

  constructor() { }
}
