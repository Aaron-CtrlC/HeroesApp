import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-404-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './404Page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class error404PageComponent { }
