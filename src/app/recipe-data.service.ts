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
  updateRecipe(recipe: Recipe, id: number) {
    console.log(recipe, id)
    let index: number = this.recipes.findIndex(recipe => recipe.id === id)
    this.recipes[index] = recipe
  }
  deleteRecipe(id: number) {
    window.confirm(
      `Deletar receita "${this.recipes[this.recipes.findIndex(recipe => recipe.id === id)].name}"?`) 
    && this.recipes.splice(
    this.recipes.findIndex(recipe => recipe.id === id), 1)
  }
}
