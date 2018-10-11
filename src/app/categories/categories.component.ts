import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { LoggingService } from '../services/logging.service';
import { JokeService } from '../services/joke.service';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private categories : string[] = [];
  private selectedCategory : string;

  public constructor(
    private categoriesService : CategoriesService,
    private jokeService : JokeService) { }

  public ngOnInit() {
    this.categoriesService.getCategories()
    .subscribe(categories => this.setCategories(categories));
  }

  private setCategories(categories : string[]) {
    this.categories = categories;
    this.selectedCategory = categories[0];
    this.jokeService.getJokes(categories[0]);
  }

  public onSelect($event : NgbTabChangeEvent): void {
    console.log($event);
    this.selectedCategory = $event.nextId;
    this.jokeService.getJokes($event.nextId);
  }

}
