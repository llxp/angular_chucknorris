import { Component, OnInit, Input } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css'],
})
export class JokeListComponent implements OnInit {

  @Input()
  public category: string;
  
  public constructor(
    private jokeService : JokeService) { }

  public ngOnInit() {
  }

}
