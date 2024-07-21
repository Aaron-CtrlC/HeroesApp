import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  standalone: false,

  templateUrl: './listPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent { }
