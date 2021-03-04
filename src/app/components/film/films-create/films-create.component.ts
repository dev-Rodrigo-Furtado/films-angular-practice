import { Film } from './../film.model';
import { Router } from '@angular/router';
import { FilmService } from './../film.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-create',
  templateUrl: './films-create.component.html',
  styleUrls: ['./films-create.component.css']
})
export class FilmsCreateComponent implements OnInit{

  film: Film = {
    name: "",
    resume: ""
  }

  constructor(private filmService: FilmService,
    private router: Router) { 

  }

  ngOnInit(): void {

  }

  create(): void {
    this.filmService.create(this.film).subscribe(() => {
      this.filmService.showMessage("Produto salvo com sucesso!");
      this.router.navigate(['/films'])
    })
  }

  cancel(): void {
    this.router.navigate(['/films'])
  }  

}
