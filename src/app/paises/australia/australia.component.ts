import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-australia',
  templateUrl: './australia.component.html',
  styleUrls: ['./australia.component.css']
})
export class AustraliaComponent implements OnInit {
  food:string = 'canguro';
  constructor() { }

  ngOnInit(): void {
  }

}
