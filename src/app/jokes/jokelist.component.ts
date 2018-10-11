import { Component, OnInit, Input } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokeListComponent implements OnInit {

  @Input() category: string;
  
  constructor(private jokeService : JokeService) { }

  ngOnInit() {
  }

}
