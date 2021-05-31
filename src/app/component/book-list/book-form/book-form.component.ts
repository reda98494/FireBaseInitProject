import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _BooksService: BooksService, private router: Router ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.bookForm = this._formBuilder.group({
      title : ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });
  }

  onSaveBook(){
    const TITLE = this.bookForm.get('title')?.value;
    const AUTHOR = this.bookForm.get('author')?.value;
    const SYNOPSIS = this.bookForm.get('synopsis')?.value;
    const newBook = new Book(TITLE,AUTHOR);
    newBook.synopsis = SYNOPSIS;
    this._BooksService.createNewBook(newBook);
    this.router.navigate(['/books']);
  }

}
