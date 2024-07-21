import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  standalone: false,

  templateUrl: './searchPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent { }
