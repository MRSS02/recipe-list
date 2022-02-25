import { Injectable } from '@angular/core';
import { Recipe } from './type-recipe'
import { DefaultRecipe } from './DefaultRecipe'

@Injectable({
  providedIn: 'root'
})

export class RecipeDataService {

  recipes: Array<Recipe>;

  constructor() {
    this.recipes = [ DefaultRecipe ]
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
