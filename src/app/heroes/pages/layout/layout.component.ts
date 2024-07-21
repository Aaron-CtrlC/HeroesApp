import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout.component.html',
  standalone:false,
styles: `
.spacer
{
    flex: 1 1 auto;
}  
`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LayoutComponent { 
  public sideBarItems=[
    {label: 'Listado', icon:'label',url:'./list'},
    {label: 'Añadir', icon:'add',url:'./new-hero'},
    {label: 'Buscar', icon:'search',url:'./search'},

  ]
}


