import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../model/food';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss'],
})
export class ListFoodComponent implements OnInit {
  foods: Food[] = [];

  constructor(private service: FoodService) {}

  ngOnInit(): void {
    this.service.listFoods().subscribe((response) => (this.foods = response));
    this.service.createFoodEvent.subscribe((response) => {
      alert(`Item adicionado => ${response.name}`);
      this.foods.push(response);
    });
  }

  deleteFood(id: number) {
    return this.service
      .deleteFood(id)
      .subscribe(
        () => (this.foods = this.foods.filter((item) => item.id !== id))
      );
  }

  editFood(id: number, name: string) {
    this.service
      .editFood(id, name)
      .subscribe((response) => console.log(response));
  }
}
