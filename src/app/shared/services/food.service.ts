import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../model/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private url: string = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  createFoodEvent = new EventEmitter();

  constructor(private http: HttpClient) {}

  listFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.url}/foods`, this.httpOptions);
  }

  createFood(name: string): Observable<Food> {
    return this.http.post<Food>(
      `${this.url}/foods`,
      {
        name,
      },
      this.httpOptions
    );
  }

  editFood(id: number, name: string): Observable<Food> {
    return this.http.put<Food>(
      `${this.url}/foods/${id}`,
      { name },
      this.httpOptions
    );
  }

  deleteFood(id: number): Observable<Food> {
    return this.http.delete<Food>(`${this.url}/foods/${id}`, this.httpOptions);
  }

  foodAlert(food: Food): void {
    this.createFoodEvent.emit(food);
  }
}
