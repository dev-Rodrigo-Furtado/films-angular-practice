import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-crud',
  templateUrl: './film-crud.component.html',
  styleUrls: ['./film-crud.component.css']
})
export class FilmCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigate(): void {
    this.router.navigate(['/films/create'])
  }
}
