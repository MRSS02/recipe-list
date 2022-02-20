import { Injectable } from '@angular/core';

const recipes: Array<object> = []

@Injectable({
  providedIn: 'root'
})

export class RecipeDataService {

  constructor() { }
  getRecipeList(): Array<object> {
    return recipes;
  }
}
