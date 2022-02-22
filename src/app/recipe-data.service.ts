import { Injectable } from '@angular/core';
import { Recipe } from './type-recipe'

@Injectable({
  providedIn: 'root'
})

export class RecipeDataService {

  recipes: Array<Recipe>;

  constructor() {
    this.recipes = [{name: Math.random().toString(),
      description:"Just do it bro",
      image: "https://img.itdg.com.br/tdg/images/recipes/000/009/254/2358/2358_original.jpg?mode=crop&width=710&height=400"},]
  }
  getRecipeList(): Array<Recipe> {
    return this.recipes;
  }
  addToList(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
