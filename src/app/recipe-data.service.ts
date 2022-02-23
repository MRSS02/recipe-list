import { Injectable } from '@angular/core';
import { Recipe } from './type-recipe'

@Injectable({
  providedIn: 'root'
})

export class RecipeDataService {

  recipes: Array<Recipe>;

  constructor() {
    this.recipes = [{ name: "Bolo de Fubá",
      description:"Just do it bro",
      image: "https://img.itdg.com.br/tdg/images/recipes/000/009/254/2358/2358_original.jpg?mode=crop&width=710&height=400",
      id: 0
    }]
  }
  getRecipeList(): Array<Recipe> {
    return this.recipes;
  }
  addToList(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  getLastId(): number {
    return this.recipes.slice().pop()?.id || 0
  }
  getRecipeById(id: number): Recipe {
    return this.recipes.find(recipe => recipe.id === id)!
  } 
}
