import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeroPageComponent } from './pages/heroPage/heroPage.component';
import { ListPageComponent } from './pages/listPage/listPage.component';
import { NewPageComponent } from './pages/newPage/newPage.component';
import { SearchPageComponent } from './pages/searchPage/searchPage.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [HeroPageComponent,LayoutComponent,ListPageComponent,NewPageComponent,SearchPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
