import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, AsyncSubject, forkJoin } from 'rxjs';
import { LoggingService } from './logging.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public constructor(private http: HttpClient, private logging : LoggingService) { }

  public getCategories() : Observable<string[]> {
    return this.http.get<string[]>(environment.categoriesUrl)
    .pipe(
      tap(heroes => this.logging.log('fetched heroes')),
      catchError(this.logging.handleError('getJoke', []))
    );
  }
}
