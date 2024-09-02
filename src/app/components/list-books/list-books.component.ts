import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent implements OnInit {
  listBook: Book[] = [
    {
      id: 1,
      title: 'Pulp',
      author: 'Bukowski',
      stock: 5
    },
    {
      id: 2,
      title: 'Also Sprach Zarathurstra',
      author: 'Nietchze',
      stock: 10
    }, {
      id: 3,
      title: 'Rouge et Blanc',
      author: 'Stendhal',
      stock: 15
    },
  ];

  constructor() {

  }
  ngOnInit(): void {

  }
}
