import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  genreslist:any;
  loader=true;

  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.MovieGenre();
  }

  MovieGenre() {
    this.movieService.getGenres().pipe(delay(2000)).subscribe((res: any) => {
      this.genreslist = res.genres;
      this.loader = false;
    });
  }

}
