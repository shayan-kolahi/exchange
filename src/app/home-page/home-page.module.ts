import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    BannerComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
