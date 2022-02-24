import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddRecipeComponent } from './AddRecipe/AddRecipe.component';
import { ListRecipeComponent } from './ListRecipe/ListRecipe.component';
import { EditRecipeComponent } from './EditRecipe/EditRecipe.component';
import { RecipeDetailComponent } from './RecipeDetail/RecipeDetail.component';

const routes: Routes = [
  {path: "", component: ListRecipeComponent,
    children: [
      {path: 'edit/:id', component: EditRecipeComponent},
      {path: 'details/:id', component: RecipeDetailComponent}
    ]
  },
  {path: 'add', component: AddRecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
