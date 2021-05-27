import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nowPlaying:any;
  loader=true;

  constructor(private movies:MoviesService) { }

  ngOnInit(): void {
    this.trendingMovies(1);
  }

  trendingMovies(page: number) {
    this.movies.getNowPlaying(page).pipe(delay(2000)).subscribe((res: any) => {
      this.nowPlaying = res.results;
      this.loader = false;
    });
  }
}
