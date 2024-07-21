import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  standalone: false,

  templateUrl: './newPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPageComponent { }
