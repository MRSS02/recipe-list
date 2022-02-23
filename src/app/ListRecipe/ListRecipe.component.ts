import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';
import { Recipe } from '../type-recipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './ListRecipe.component.html',
  styleUrls: ['./ListRecipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  public recipes: Array<Recipe> = []
  constructor(public route: ActivatedRoute, private list: RecipeDataService) { }
  ngOnInit(): void {
    this.recipes = this.list.getRecipeList();
  }

}
