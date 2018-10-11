import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { LoggingService } from '../services/logging.service';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private categories : string[] = [];
  private selectedCategory : string;

  public constructor(private categoriesService : CategoriesService, private jokeService : JokeService, private logging : LoggingService) { }

  public ngOnInit() {
    this.categoriesService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  public onSelect(category : string): void {
    this.selectedCategory = category;
    this.jokeService.getJokes(category);
  }

}
