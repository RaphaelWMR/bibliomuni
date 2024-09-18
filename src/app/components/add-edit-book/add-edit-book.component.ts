import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';
import { IsbnService } from '../../services/isbn.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrl: './add-edit-book.component.css'
})
export class AddEditBookComponent {
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar ';
  constructor
    (private router: Router,
      private fb: FormBuilder,
      private _bookService: BookService,
      private _bookByISBNService: IsbnService,
      private aRouter: ActivatedRoute
    ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      stock: ['', Validators.required],
      isbn: ['']
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      // Edit
      this.operacion = 'Editar ';
      this.getBook(this.id);
    }
  }


  addBook() {
    const book: Book = {
      title: this.form.value.title,
      author: this.form.value.author,
      stock: this.form.value.stock,
    }

    if (this.id !== 0) {
      //editar
      book.id = this.id;
      this._bookService.updateBook(this.id, book).subscribe(() => {
        console.log('Libro actualizado');
        this.router.navigate(['/books']);
      })
    } else {
      //agregar
      this._bookService.saveBook(book).subscribe(() => {
        console.log('Libro agregado');
        this.router.navigate(['/books']);
      })

    };
  }
  getBook(id: Number) {
    this._bookService.getBook(id).subscribe((data: Book) => {
      console.log(data);
      this.form.setValue({
        title: data.title,
        author: data.author,
        stock: data.stock,
      })
    })
  }
  getDataBook() {
    this._bookByISBNService.getBookByIsbn(this.form.value.isbn ?? '01').subscribe((data: Book) => {
      console.log("Book: ", data);
      this.form.setValue({
        title: data.title,
        author: data.author,
        stock: '',
        isbn: this.form.value.isbn
      })
    })
  }


}
