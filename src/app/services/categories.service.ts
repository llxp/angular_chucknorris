import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, AsyncSubject, forkJoin } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categoriesUrl : string = "https://api.chucknorris.io/jokes/categories";

  constructor(private http: HttpClient, private logging : LoggingService) { }

  getCategories() : Observable<string[]> {
    return this.http.get<string[]>(this.categoriesUrl)
    .pipe(
      tap(heroes => this.logging.log('fetched heroes')),
      catchError(this.logging.handleError('getJoke', []))
    );
  }
}
