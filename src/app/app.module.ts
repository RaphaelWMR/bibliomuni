import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { AddEditBookComponent } from './components/add-edit-book/add-edit-book.component';
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListBooksComponent,
    AddEditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
