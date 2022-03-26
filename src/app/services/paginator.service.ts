import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  pages: any = {}; // Hashmap where the key is the booking page and the value is the movie array
  pagesSize: number = 100; // Number of elements per page
  movies: Array<any> = []; // All the movie elements
  movieService: MoviesService; // Fetching movie service
  total: number = 0; // Total number of pages

  constructor(moviesService: MoviesService) {
    this.movieService = moviesService;
  }

  async setMovies() {
    this.movies = await this.movieService.getMovies();
    return this.movies;
  }

  setPageSize(size: number) {
    this.pagesSize = size;
  }

  async setPages(): Promise<Array<any>> {
    const moviesArray = await this.setMovies();

    //Dividing the array into chunks (pages) to create a book of movies
    for (let i = 0; i < moviesArray.length; i += this.pagesSize) {
      const chunk = moviesArray.slice(i, i + this.pagesSize);
      const pageNum = (i / 100) + 1;
      this.pages[pageNum] = chunk;
      this.total = pageNum;
    }
    
    return this.pages;
  }

  getPage(pageNum: number): Array<any> {
    return this.pages[pageNum] !== null ? this.pages[pageNum] : [];
  }

  getBook(): Array<any> {
    return this.pages;
  }

}
