import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from '../layouts/full/full.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../layouts/full/header/header.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../layouts/full/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SidemenuComponent } from '../common/sidemenu/sidemenu.component';
import { BurgerMenuComponent } from '../common/burger-menu/burger-menu.component';
import { CarouselNavigationComponent } from '../common/carousel-navigation/carousel-navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from '../layouts/about-us/about-us.component';
import { ScollprogressDirective } from '../../main/directives/scollprogress.directive';
import { HowItWorksComponent } from '../layouts/how-it-works/how-it-works.component';

const CORE_COMPONENTS = [
  FullComponent,
  HeaderComponent,
  FooterComponent,
  SidemenuComponent,
  BurgerMenuComponent,
  CarouselNavigationComponent,
  AboutUsComponent,
  HowItWorksComponent

]

@NgModule({
  declarations: [...CORE_COMPONENTS, ScollprogressDirective],
  exports: [...CORE_COMPONENTS, RouterModule, MaterialModule, FlexLayoutModule, FormsModule, NgbModule],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [...CORE_COMPONENTS],
  providers: []
})
export class CoreModule { }
