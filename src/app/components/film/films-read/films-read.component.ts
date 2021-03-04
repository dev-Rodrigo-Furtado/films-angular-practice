import { StandardResponse } from './../../../resources/standard-response';
import { Film } from './../film.model';
import { FilmService } from './../film.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-read',
  templateUrl: './films-read.component.html',
  styleUrls: ['./films-read.component.css']
})
export class FilmsReadComponent implements OnInit {

  films: Film[]

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() : void {
    this.filmService.findAll().subscribe(response => {
      console.log(response.data);      
    })
  }

}
