import { Component, OnInit, Input } from '@angular/core';
import { JokeService } from '../services/joke.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // <-- import bootstrap

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent implements OnInit {

  @Input() category: string;
  
  constructor(private jokeService : JokeService, public ngbModule : NgbModule) { }

  ngOnInit() {
  }

}
