import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselNavigationComponent } from '../carousel-navigation/carousel-navigation.component';




@NgModule({
    imports: [BrowserModule, NgbModule],
    declarations: [CarouselNavigationComponent],
    exports: [CarouselNavigationComponent],
    bootstrap: [CarouselNavigationComponent]
})
export class NgbdCarouselNavigationModule { }
