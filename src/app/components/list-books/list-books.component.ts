import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

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
  

  constructor(private _bookService: BookService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.getListBooks();
  }

  getListBooks() {

    this._bookService.getListBooks().subscribe((data: Book[]) => {
      this.listBook = data;
    });

  }
  updateBook(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteBook(id: number) {
    this._bookService.deleteBook(id).subscribe(() => {
      this.getListBooks();
    })
  }
}
