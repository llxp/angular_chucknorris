import { Injectable } from '@angular/core';
import { Joke } from '../JokeModel';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { LoggingService } from './logging.service';
import { JokeContainer } from '../jokecontainer';
import { Dictionary } from '../Dictionary';
import { CategoryContainer } from '../CategoryContainer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  public endOfFetchReached : Subject<string> = new Subject<string>();
  public fetchedJokes : Dictionary<CategoryContainer> = new Dictionary<CategoryContainer>();

  public constructor(
    private http: HttpClient,
    private logging : LoggingService) { }

  private getJoke(category : string) : Observable<Joke> {
    return this.http.get<Joke>(environment.jokesUrl + category)
    .pipe(
      tap(heroes => this.logging.log('fetched jokes')),
      catchError(this.logging.handleError<Joke>('getJoke'))
    );
  }

  // function to fetch the jokes from the api
  public getJokes(category : string) : void {
    this.logging.log("getJokes : " + category);
    this.createEmptyCategory(category);
    if (this.checkMaxJokes(category)) {
      for(let i = 3;i>=1;i--) {
        this.getSingleJoke(category, 0);
      }
    }
  }

  private getSingleJoke(category : string, currentTryLimit : number) : void {
    if(currentTryLimit < 10) {
      // fetch a joke
      this.getJoke(category).subscribe(joke => this.addJokeToStore(joke, category, currentTryLimit));
    } else {
      // signal, that the current category has no more jokes available
      this.endOfFetchReached.next(category);
    }
  }

  // check if a category was created, if not, create an empty one
  private createEmptyCategory(categoryStr : string) : void {
    if(!this.fetchedJokes[categoryStr]) {
      this.fetchedJokes[categoryStr] = new CategoryContainer({category:categoryStr, maxJokeCount:3, likeCount:0});
    }
  }

  // function to check,
  // if the fetched jokes
  // match the current set limit of maximum jokes
  private checkMaxJokes(category : string) : boolean {
    if (this.fetchedJokes[category]) {
      const jokesLength = this.fetchedJokes[category].jokes.length;
      const maxJokesCount = this.fetchedJokes[category].maxJokeCount;
      return jokesLength < maxJokesCount;
    }
    return false;
  }

  private addJokeToStore(jokeObj : Joke, categoryStr : string, currentTryLimit : number) : void {
    if (this.checkMaxJokes(categoryStr)) {
      for(let i = 0;i < this.fetchedJokes[categoryStr].jokes.length;++i) {
        if(this.fetchedJokes[categoryStr].jokes[i].joke.id === jokeObj.id) {
          // the fetched joke is already fetched,
          // try to fetch another one again, but increase the try limit
          this.getSingleJoke(categoryStr, ++currentTryLimit);
          return;
        }
      }
      // add the joke object to the cache
      this.fetchedJokes[categoryStr].jokes.push(new JokeContainer({joke:jokeObj,category:categoryStr}));
    }
  }

  // will trigger an recount of likes in given category
  public updateLike(joke : JokeContainer) : void {
    if(joke.category.length > 0) {
      this.getLikeCount(joke.category);
    }
  }

  //recount likes of given category
  private getLikeCount(category : string) : void {
    this.resetLikeCount(category);
    for(let i = 0;i < this.fetchedJokes[category].jokes.length;++i) {
      if(this.fetchedJokes[category].jokes[i].like) {
        this.increaseLikeCount(category);
      }
    }
  }

  private increaseLikeCount(category : string) : void {
    ++this.fetchedJokes[category].likeCount;
  }

  private resetLikeCount(category : string) : void {
    this.fetchedJokes[category].likeCount = 0;
  }
  
}
