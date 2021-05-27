import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { CarouselModule } from 'primeng/carousel';
import { MovieDetailsComponent } from './movie-details.component';
import { PipeModule } from 'src/app/pipes/pipe.module';


@NgModule({
  declarations: [
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule,
    PipeModule
  ]
})
export class MovieDetailsModule { }
