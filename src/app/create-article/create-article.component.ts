import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Article} from '../articles/article.model';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  articles: Article[];
  @Output() submitArticle: EventEmitter<any>;
  constructor() {
    this.submitArticle = new EventEmitter();
    this.articles = [];
    console.log(this.articles);
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    console.log(this.articles);
    this.submitArticle.emit(this.articles);
    return false;
  }
  ngOnInit() {
  }

}
