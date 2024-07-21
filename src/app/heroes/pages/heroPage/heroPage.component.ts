import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  standalone: false,

  templateUrl: './heroPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent { }
