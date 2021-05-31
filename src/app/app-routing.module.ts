import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './component/auth/sigin/sigin.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { BookFormComponent } from './component/book-list/book-form/book-form.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { SingleBookComponent } from './component/book-list/single-book/single-book.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'auth/signup', component:SignupComponent},
  {path:'auth/signin', component:SiginComponent},
  {path:'books', canActivate: [AuthGuardService], component:BookListComponent},
  {path:'books/new', canActivate: [AuthGuardService], component:BookFormComponent},
  {path:'books/view/:id', canActivate: [AuthGuardService], component:SingleBookComponent},
  {path:'',  component: BookListComponent},
  {path:'**',  component: BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
