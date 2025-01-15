import { Component } from '@angular/core';
import { DietService } from '../../services/diet-service/diet.service';
import { Observable } from 'rxjs';
import { Diet } from '../../models/diet';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-show-diets',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, MatProgressSpinnerModule, HttpClientModule],
  providers: [DietService],
  templateUrl: './show-diets.component.html',
  styleUrl: './show-diets.component.css'
})
export class ShowDietsComponent {

  constructor(public dietService: DietService) { }

  ngOnInit(): void {
    this.dietService.getDiets()
  }

}
