import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreRoutingModule } from './genre-routing.module';
import { PipeModule } from 'src/app/pipes/pipe.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GenreComponent } from './genre.component';



@NgModule({
  declarations: [GenreComponent],
  imports: [
    CommonModule,
    GenreRoutingModule,
    PipeModule,
    MatPaginatorModule
  ]
})
export class GenreModule { }
