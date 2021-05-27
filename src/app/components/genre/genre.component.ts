import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { delay } from 'rxjs/internal/operators/delay';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  moviesGenre:any;
  public title="";
  public id="";
  loader=true;

  constructor(private movieService:MoviesService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.title = params['name'];
      this.getMoviesGenre(this.id);
    });
  }

  getMoviesGenre(id:string) {
    this.movieService.getMoviesByGenre(id).pipe(delay(2000)).subscribe((res: any) => {
        this.moviesGenre = res.results;
        this.loader = false;
    });
  }
  }