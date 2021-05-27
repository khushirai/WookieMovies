import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreListComponent } from './genre-list.component';
import { GenreListRoutingModule } from './genre-list-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GenreListComponent],
  imports: [
    CommonModule,
    GenreListRoutingModule,
    MatButtonModule
  ]

})
export class GenreListModule { }
