import { Injectable } from '@angular/core';
import { Recipe } from './type-recipe'

@Injectable({
  providedIn: 'root'
})

export class RecipeDataService {

  recipes: Array<Recipe>;

  constructor() {
    this.recipes = [{ name: "Bolo de Fubá",
      description:
      `Ingredientes
      
3 ovos
1 xícara de chá de óleo
1 xícara de chá de leite
2 xícaras de chá de açúcar
1 xícara de chá de farinha de trigo
2 xícaras de chá de fubá
1 colher de sopa de fermento em pó
      
Modo de Preparo
      
1. Peneirar os secos numa tigela e reservar.
2. Bater os líquidos no liquidificador e juntar nos secos peneirados.
3. Colocar em forma de anel, ou outra de sua preferência, untada e polvilhada com fubá.
4. Forno aproximadamente 30 a 40 minutos. 
      
Dicas:
      
Eu não uso o liquidificador; bato bem com o fuê.
Tamanho das formas que uso para esse bolo: 23 centímetros de diâmetro por 8 centímetros de altura ou 25 centímetros de diâmetro por 7 centímetros de altura.
Para assar coloco a forma de anel dentro de outra forma redonda pois, no caso de transbordar, não suja o forno, e este bolo cresce bastante.`,
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
