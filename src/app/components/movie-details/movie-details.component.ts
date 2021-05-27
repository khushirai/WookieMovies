import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute , Params} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public id="";
  movie:any;
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';

  constructor(
    private movieService:MoviesService,
    private router:ActivatedRoute,
    private sanitizer:DomSanitizer,
    private dialog:MatDialog,
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getSingleMoviesDetails(this.id);
    });
  }

  getSingleMoviesDetails(id:string){
    this.movieService.getMovie(id).subscribe((res: any) => {
      this.movie = res;
    });
  }
}
