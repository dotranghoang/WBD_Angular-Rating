import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  default = 'white';
  color = 'yellow';
  rate = [];

  changRate(value: number) {
    for (let i = 0 ; i < 11 ; i++){
      if ( i === 0) {
        this.rate[i] = 'red';
      } else if (i <= value) {
        this.rate[0] = this.default;
        this.rate[i] = this.color;
      } else {
        this.rate[i] = this.default;
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
