import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Diet } from '../../models/diet';

@Injectable({
  providedIn: 'root'
})

export class DietService {

  private url = "https://localhost:7060/api/Diet"
  diets$!: Observable<Diet[]>

  constructor(public http: HttpClient) { }

  getDiets() {
    this.http.get<Diet[]>(this.url).subscribe(data => {
      this.diets$ = of(data)
    })
  }

} 
