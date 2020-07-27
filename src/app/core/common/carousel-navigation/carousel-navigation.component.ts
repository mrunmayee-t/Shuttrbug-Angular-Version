import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselNavigationComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['../../../../assets/images/banner_2.jpg', '../../../../assets/images/banner_3.jpg'];
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {

  }


}
