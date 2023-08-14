import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListFoodComponent } from './list-food/list-food.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListFoodComponent, CreateFoodComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [ListFoodComponent, CreateFoodComponent],
})
export class SharedModule {}
