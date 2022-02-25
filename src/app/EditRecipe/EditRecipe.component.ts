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
  styleUrls: ['../styles/RecipeManipulation.css']
})
export class EditRecipeComponent implements OnInit {

  public recipe: Recipe = {
    name: "", description: "", image: "", id: 0
  }
  public invalidFields: Array<boolean> = [false, false, false]
  
  constructor(private list: RecipeDataService, private route: ActivatedRoute, 
    private router: Router, private toastr: ToastrService) { }

  onSubmit(form: NgForm) {

    const recipe: Recipe = {
      name: form.form.value.name,
      description: form.form.value.description,
      image: form.form.value.image,
      id: this.recipe.id
    }
    this.invalidFields = [!recipe.name, !recipe.description, 
      !recipe.image]
      console.log(this.invalidFields)
      if (this.invalidFields.find(field => field)) {
        this.alertInvalidField(
          this.invalidFields[0] ? '"Título"' : 
          this.invalidFields[1] ? '"Descrição"' :
          '"Imagem"' 
        )
      } else {
        this.list.updateRecipe(recipe, this.recipe.id)
        this.alertSucess()
        this.router.navigate(['/'])
      }


  }

  alertSucess() {
    console.log("success")
    this.toastr.success('Receita editada com sucesso');
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
