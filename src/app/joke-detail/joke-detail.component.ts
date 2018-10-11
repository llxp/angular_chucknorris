import { Component, OnInit, Input } from '@angular/core';
import { JokeContainer } from '../jokecontainer';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {

  @Input()
  public joke : JokeContainer;

  public constructor(
    private jokeService : JokeService) { }

  public ngOnInit() {
  }

  // triggered, when somebody clicks on the like button
  private onChange(event : any) : void
  {
    this.jokeService.updateLike(this.joke);
  }

}
