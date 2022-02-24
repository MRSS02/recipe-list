import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDataService } from '../recipe-data.service';
import { Router } from '@angular/router';
import { Recipe } from '../type-recipe';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './EditRecipe.component.html',
  styleUrls: ['./EditRecipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  public recipe: Recipe = {
    name: "", description: "", image: "", id: 0
  }
  constructor(private list: RecipeDataService, private route: ActivatedRoute, 
    private router: Router, private toastr: ToastrService) { }

  onSubmit(form: NgForm) {
    console.log()
    const recipe: Recipe = {
      name: form.form.value.name,
      description: form.form.value.description,
      image: form.form.value.image,
      id: this.recipe.id
    }
    if (recipe.name !== "" && recipe.description !== "" && recipe.image !== "") {
      this.list.updateRecipe(recipe, this.recipe.id)
    } else {
      this.alertInvalidField(
        recipe.name === "" ? '"Título"' : 
        recipe.description === "" ? '"Descrição"' :
        '"Imagem"' 
      )
    }
    this.router.navigate(['/'])
  }

  alertInvalidField(field: string) {
    console.log("failuire")
    this.toastr.warning(`Campo ${field} não pode ser vazio`)
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.recipe = this.list.getRecipeById(parseInt(params["id"]));
        console.log(this.recipe)
      }
    )
  }

}
