import { Component, OnInit, Input } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { Dictionary } from '../Dictionary';

@Component({
  selector: 'app-fetch-more',
  templateUrl: './fetch-more.component.html',
  styleUrls: ['./fetch-more.component.css']
})
export class FetchMoreComponent implements OnInit {

  private endOfFetchReached : Dictionary<boolean> = new Dictionary<boolean>();
  
  @Input()
  public category : string;

  public constructor(
    private jokeService : JokeService) { }

  public ngOnInit() {
    this.jokeService.endOfFetchReached.subscribe(
      category => this.onEndOfFetchReached(category));
  }

  public onClick() : void {
    // increase maximum of fetchable jokes by 3
    this.jokeService.fetchedJokes[this.category].maxJokeCount += 3;
    this.jokeService.getJokes(this.category);
  }

  private onEndOfFetchReached(category : string) : void {
    if(this.category === category) {
      this.endOfFetchReached[category] = true;
    }
  }

}
