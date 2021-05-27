import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  topRated:any;
  loader=true;
  totalResults:any;
  total_Results:any;
  searchRes:any;
  searchStr:any;

  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.getTopRatedMovies(1);
  }

  getTopRatedMovies(page: number) {
    this.movieService.getTopRatedMovies(page).pipe(delay(2000)).subscribe((res: any) => {
      this.topRated = res.results;
      this.totalResults = res.total_results;
      this.loader = false;
    },
    error => console.log(error));
  }

  changePage(event:any) {
    this.loader = true;
    this.getTopRatedMovies(event.pageIndex + 1);
  }

  searchMovies() {
    this.movieService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    });
  }

}
