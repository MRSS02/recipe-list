import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';
import { FormsModule } from '@angular/forms';

import { Recipe } from '../type-recipe';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './AddRecipe.component.html',
  styleUrls: ['./AddRecipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  //recipe = null;
  constructor(public RecipeDataService: RecipeDataService) { }

  addRecipe(recipe: Recipe) {
    console.log("i can reach addRecipe")
    this.RecipeDataService.addToList(recipe)
  }

  onSubmit(form: any) {
    console.log()
    const recipe: Recipe = {
      name: form.form.value.name,
      description: form.form.value.description,
      image: form.form.value.image
    }
    this.addRecipe(recipe)
  }
  
  ngOnInit(): void {
  }

}
