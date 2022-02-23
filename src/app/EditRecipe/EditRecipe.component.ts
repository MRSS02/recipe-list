import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { RecipeDataService } from '../recipe-data.service';
import { Recipe } from '../type-recipe';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './EditRecipe.component.html',
  styleUrls: ['./EditRecipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  public recipe: Recipe = {
    name: "", description: "", image: "", id: 0
  }
  constructor(private list: RecipeDataService, private route: ActivatedRoute) { }

  onSubmit(form: any) {
    console.log()
    const recipe: Recipe = {
      name: form.form.value.name,
      description: form.form.value.description,
      image: form.form.value.image,
      id: this.recipe.id
    }
    this.list.updateRecipe(recipe, this.recipe.id)
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
