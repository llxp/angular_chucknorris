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
  joke : JokeContainer;

  constructor(private jokeService : JokeService) { }

  ngOnInit() {
  }

  onChange(event : any) : void
  {
    console.log("checkbox changed...");
    console.log(this.joke);
    this.jokeService.updateLike(this.joke);
  }

}
