import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDataService } from '../recipe-data.service';
import { Recipe } from '../type-recipe';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './RecipeDetail.component.html',
  styleUrls: ['./RecipeDetail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public recipe: Recipe = {
    name: "", description: "", image: "", id: 0
  }
  constructor(private list: RecipeDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.recipe = this.list.getRecipeById(parseInt(params["id"]));
        console.log(this.recipe)
      }
    )
  }
}
