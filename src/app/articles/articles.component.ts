import { Component, OnInit, Input } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  @Input() articleItem: Article;

  constructor() {}

  ngOnInit() {
  }

  voteUp (): Boolean {
    this.articleItem.voteUp();
    return false;
  }

  voteDown (): Boolean {
    this.articleItem.voteDown();
    return false;
  }

}
