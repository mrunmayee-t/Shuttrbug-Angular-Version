import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.scss']
})
export class CarouselNavigationComponent implements OnInit {
  images = [];
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.images = [{
      id: 1,
      src: "../../../../assets/images/banner_2.jpg"
    },
    {
      id: 2,
      src: "../../../../assets/images/banner_3.jpg"
    }];
  }



}

