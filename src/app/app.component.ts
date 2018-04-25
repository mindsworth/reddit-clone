import { Component } from '@angular/core';
import {Article} from './articles/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [];
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
  addingArticles(addedArticles) {
    console.log(`this is a diff array ${addedArticles}`);
    this.articles = addedArticles;
  }
}
