import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './ListRecipe.component.html',
  styleUrls: ['./ListRecipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  public recipes: Array<object> = []
  constructor(private list: RecipeDataService) { }
  ngOnInit(): void {
    this.recipes = this.list.getRecipeList();
  }

}
