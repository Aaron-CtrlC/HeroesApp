import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { error404PageComponent } from './shared/404Page/404Page.component';
import { HeroesModule } from './heroes/heroes.module';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, 
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) }, 
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full' 
  },
  {
    path:'404',
    component: error404PageComponent
  },  
  {
    path:'**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
