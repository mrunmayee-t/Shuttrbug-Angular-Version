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
    },
    {
      id: 3,
      src: "../../../../assets/images/banner_1.jpg"
    },
    {
      id: 4,
      src: "../../../../assets/images/banner_4.jpg"
    },
    {
      id: 5,
      src: "../../../../assets/images/banner_5.jpg"
    },
    {
      id: 6,
      src: "../../../../assets/images/banner_6.jfif"
    },
    {
      id: 7,
      src: "../../../../assets/images/banner_7.jfif"
    },
    {
      id: 8,
      src: "../../../../assets/images/banner_8.jpg"
    },
    {
      id: 9,
      src: "../../../../assets/images/banner_9.jpg"
    },
    {
      id: 10,
      src: "../../../../assets/images/banner_10.jpg"
    },
    {
      id: 11,
      src: "../../../../assets/images/banner_11.jpg"
    }];
  }



}

