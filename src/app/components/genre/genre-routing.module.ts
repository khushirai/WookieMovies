import { NgModule } from '@angular/core';
import { GenreComponent } from './genre.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[{path:'', component:GenreComponent}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule { }
