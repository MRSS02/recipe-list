import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Recipe } from '../type-recipe';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './AddRecipe.component.html',
  styleUrls: ['./AddRecipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  //recipe = null;
  constructor(public RecipeDataService: RecipeDataService, private router: Router) { }

  addRecipe(recipe: Recipe) {
    console.log("i can reach addRecipe")
    this.RecipeDataService.addToList(recipe)
  }

  getNextId(): number {
    return this.RecipeDataService.getLastId() + 1
  }

  onSubmit(form: NgForm) {
    const recipe: Recipe = {
      name: form.form.value.name,
      description: form.form.value.description,
      image: form.form.value.image,
      id: this.getNextId()
    }
    this.addRecipe(recipe)
    this.router.navigate(['/list'])
  }
  
  ngOnInit(): void {
  }

}
