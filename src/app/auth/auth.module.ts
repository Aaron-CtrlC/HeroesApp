import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutComponent,LoginPageComponent,RegisterPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    MaterialModule,
  ]
})
export class AuthModule { }
