import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './actividades/actividades.component';
import { GroupComponent } from './group/group.component';
import { Group1Component } from './group1/group1.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { New1Component } from './new1/new1.component';
import { NewsComponent } from './news/news.component';
import { NotesComponent } from './notes/notes.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'login', component: LoginComponent,
  },
  {
    path:'menu', component: MenuComponent,
  },
  {
    path:'news', component: NewsComponent,
  },
  {
    path:'new1', component: New1Component,
  },
  {
    path:'profile', component: ProfileComponent, 
  },
  {
    path:'group', component: GroupComponent,
  },
  {
    path:'group1', component:  Group1Component,
  },
  {
    path:'notes', component: NotesComponent,
  },
  {
    path:'actividades', component: ActividadesComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
