import { Injectable } from '@angular/core';
import { fetchJson } from 'src/app/utils'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  async getMovies(): Promise<any> {
    // we return the fetchJSON everytime someone uses this service
    // This, however is not a performance issue as we also memoized the JSON
    // To other service -> (src/app/services/paginator.service.ts)
    return await fetchJson()
  }
}
