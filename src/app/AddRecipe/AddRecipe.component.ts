import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Recipe } from '../type-recipe';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './AddRecipe.component.html',
  styleUrls: ['./AddRecipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  //recipe = null;
  constructor(public RecipeDataService: RecipeDataService, 
  private router: Router, private toastr: ToastrService) { }

  addRecipe(recipe: Recipe) {
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
    if (recipe.name !== "" && recipe.description !== "" && recipe.image !== "") {
      this.addRecipe(recipe)
      form.reset()
      this.alertSucess()
    } else {
      this.alertInvalidField(
        recipe.name === "" ? '"Título"' : 
        recipe.description === "" ? '"Descrição"' :
        '"Imagem"' 
      )
    }

  }

  alertSucess() {
    console.log("success")
    this.toastr.success('Receita cadastrada com sucesso');
  }

  alertInvalidField(field: string) {
    console.log("failuire")
    this.toastr.warning(`Campo ${field} não pode ser vazio`)
  }
  
  ngOnInit(): void {
  }

}
