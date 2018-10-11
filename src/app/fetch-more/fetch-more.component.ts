import { Component, OnInit, Input } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-fetch-more',
  templateUrl: './fetch-more.component.html',
  styleUrls: ['./fetch-more.component.css']
})
export class FetchMoreComponent implements OnInit {

  private endOfFetchReached : boolean = false;
  
  @Input()
  public category : string;

  constructor(private jokeService : JokeService) { }

  ngOnInit() {
    this.jokeService.endOfFetchReached.subscribe(
      category => this.onEndOfFetchReached(category));
  }

  public onClick() : void {
    console.log("fetching more jokes...");
    this.jokeService.fetchedJokes[this.category].maxJokeCount += 3;
    this.jokeService.getJokes(this.category);
  }

  private onEndOfFetchReached(category : string) : void {
    if(this.category === category) {
      this.endOfFetchReached = true;
    }
  }

}
