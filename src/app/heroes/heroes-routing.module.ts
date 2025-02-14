import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPageComponent } from './pages/newPage/newPage.component';
import { SearchPageComponent } from './pages/searchPage/searchPage.component';
import { ListPageComponent } from './pages/listPage/listPage.component';
import { HeroPageComponent } from './pages/heroPage/heroPage.component';
import { LayoutComponent } from './pages/layout/layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'new-hero', component: NewPageComponent },
            { path: 'search', component: SearchPageComponent },
            { path: 'edit/:id', component: NewPageComponent },
            { path: 'list', component: ListPageComponent },
            { path: ':id', component: HeroPageComponent },
            { path: '**', redirectTo: 'list' }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesRoutingModule {

}
