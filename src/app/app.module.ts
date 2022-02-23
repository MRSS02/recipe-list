import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddRecipeComponent } from './AddRecipe/AddRecipe.component';
import { ListRecipeComponent } from './ListRecipe/ListRecipe.component';
import { MainMenuComponent } from './MainMenu/MainMenu.component';
import { RecipeDetailComponent } from './RecipeDetail/RecipeDetail.component';
import { EditRecipeComponent } from './EditRecipe/EditRecipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    ListRecipeComponent,
    MainMenuComponent,
    RecipeDetailComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
