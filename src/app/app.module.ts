import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginComponent } from './component/auth/sigin/sigin.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { SingleBookComponent } from './component/book-list/single-book/single-book.component';
import { BookFormComponent } from './component/book-list/book-form/book-form.component';
import { HeaderComponent } from './component/header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BooksService } from './services/books.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './component/auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    SignupComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService,AuthService ,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
