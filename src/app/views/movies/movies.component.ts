import { Component, OnInit } from '@angular/core';
import { PaginatorService } from 'src/app/services/paginator.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class IndexComponent implements OnInit {
  paginator: PaginatorService;
  movies: Array<any> = [];
  page: number = 1;

  constructor(
    // I'm implementing my own paginator instead of using material pagination
    // For you guys to be able to test my logic on this kind of issues
    private paginatorService: PaginatorService,
  ) {
    this.paginator = paginatorService;
  }

  async ngOnInit(): Promise<void> {
    await this.paginator.setPages()
    this.movies = this.paginator.getPage(this.page) 
  }

  advancePage(pangeNum: number): void {
    // Pagination: if the pagination is lowe than 0 we return 0
    // if its bigger than the total pages we return the total pages
    this.page += pangeNum
    this.page = this.page <= 1
      ? 1
      : ( 
        this.page >= this.paginator.total
          ? this.paginator.total
          : this.page
      );
    // Setting the movies array to the current page
    this.movies = this.paginator.getPage(this.page)
  }

}
