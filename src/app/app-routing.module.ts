import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddRecipeComponent } from './AddRecipe/AddRecipe.component';
import { ListRecipeComponent } from './ListRecipe/ListRecipe.component';
import { MainMenuComponent } from './MainMenu/MainMenu.component';

const routes: Routes = [
  {path: "", component: MainMenuComponent},
  {path: 'AddRecipe', component: AddRecipeComponent},
  {path: 'ListRecipe', component: ListRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
