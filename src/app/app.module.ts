import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { JokeListComponent } from './jokes/jokelist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import { FetchMoreComponent } from './fetch-more/fetch-more.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    JokeListComponent,
    JokeDetailComponent,
    FetchMoreComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
