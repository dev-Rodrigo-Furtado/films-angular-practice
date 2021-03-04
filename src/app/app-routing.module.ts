import { FilmsCreateComponent } from './components/film/films-create/films-create.component';
import { FilmCrudComponent } from './views/film-crud/film-crud/film-crud.component';
import { HomeComponent } from './views/home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "films",
    component: FilmCrudComponent
  }, {
    path: "films/create",
    component: FilmsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
