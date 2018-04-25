import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
