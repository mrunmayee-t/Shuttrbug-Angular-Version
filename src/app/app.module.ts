import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './core/layouts/full/full.component';
import { CoreModule } from './core/modules/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './core/common/sidemenu/sidemenu.component';
import { AnimationsDirective } from './main/directives/animations.directive';
import { AboutUsComponent } from './core/layouts/about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimationsDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
