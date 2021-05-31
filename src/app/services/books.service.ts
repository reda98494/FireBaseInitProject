import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { Book } from '../models/Book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = []
  
  bookSubject = new Subject<Book[]>()


  constructor() { }

  emitBook(){
    this.bookSubject.next(this.books.slice())
  }

  saveBooks(){
    firebase.default.database().ref('/books').set(this.books);
  }

  getBooks(): void{
    firebase.default.database().ref('/books')
      .on('value', (data)=>{
        this.books = data.val() ? data.val() : [];
      })
  }

  getSingleBook(id: number){
    return new Promise(
      (resolve, reject)=>{
        firebase.default.database().ref('/books/'+id).once('value').then(
          (data)=>{
            resolve(data.val());
          }, (error)=>{
            reject(error)
          }
        );
      }
    );
  }

  createNewBook(newBook: Book):void{
    this.books.push(newBook);
    this.saveBooks();
    this.emitBook();
  }

  removeBook(book: Book): void{
    const bookIndexToRemove = this.books.findIndex(
      (bookEl)=>{
        if(bookEl===book){
          return true
        }else{
          return false
        }
      }
    );
    this.books.splice(bookIndexToRemove,1);
    this.saveBooks();
    this.emitBook();

  }

}
