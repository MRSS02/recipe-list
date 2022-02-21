import { Injectable } from '@angular/core';
import { Recipe } from './type-recipe'

const recipes: Array<Recipe> = [{name: "Bolo de fubá",
ingredients: "Food",
preparation: "You just do it bro", 
image: "https://img.itdg.com.br/tdg/images/recipes/000/009/254/2358/2358_original.jpg?mode=crop&width=710&height=400"
}, ]

@Injectable({
  providedIn: 'root'
})

export class RecipeDataService {

  constructor() { }
  getRecipeList(): Array<Recipe> {
    return recipes;
  }
}
