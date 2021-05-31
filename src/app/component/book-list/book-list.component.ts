import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  booksSubscription: Subscription= new Subscription;

  constructor(private _BooksService: BooksService, private router: Router) { }


  

  ngOnInit(): void {
    this.booksSubscription = this._BooksService.bookSubject.subscribe(
      (books: Book[])=>{
        this.books= books;
      }
    );
    this._BooksService.emitBook();
  }

  onNewBook(){
    this.router.navigate(['/books/new']);
  }

  onDeleteBook(book: Book){
    this._BooksService.removeBook(book)
  }

  onViewBook(id: number){
    this.router.navigate(['books/view/',id])
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }

}
