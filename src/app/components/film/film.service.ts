import { StandardResponse } from './../../resources/standard-response';
import { Film } from './film.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private baseUrl: string = "http://localhost:8080/api/films"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  create(film: Film): Observable<Film> {
    return this.http.post<Film>(this.baseUrl, film)
  }

  findAll(): Observable<StandardResponse<Film[]>> {
    return this.http.get<StandardResponse<Film[]>>(this.baseUrl)
  }

}
