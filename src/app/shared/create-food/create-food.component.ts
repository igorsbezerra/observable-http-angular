import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.scss'],
})
export class CreateFoodComponent {
  food: string = '';

  constructor(private service: FoodService) {}

  createFood(): void {
    this.service
      .createFood(this.food)
      .subscribe((response) => this.service.foodAlert(response));
  }
}
