import { NgModule } from '@angular/core';
import { GenreListComponent } from './genre-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[{path:'', component:GenreListComponent}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreListRoutingModule { }
