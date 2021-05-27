import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'movies',
    loadChildren:()=> import('./components/movies/movies.module').then(mod=> mod.MoviesModule)
  },
  {
    path:'movies/:id',
    loadChildren:()=>import('./components/movie-details/movie-details.module').then(mod=>mod.MovieDetailsModule)
  },
  {
    path: 'genres',
    loadChildren: () => import('./components/genre-list/genre-list.module').then(mod => mod.GenreListModule)
  },
  {
    path: 'genres/:id/:name',
    loadChildren: () => import('./components/genre/genre.module').then(mod => mod.GenreModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
