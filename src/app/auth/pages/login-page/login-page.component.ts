import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone:false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent { }
