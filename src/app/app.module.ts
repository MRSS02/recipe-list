import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecipeComponent } from './AddRecipe/AddRecipe.component';
import { ListRecipeComponent } from './ListRecipe/ListRecipe.component';
import { MainMenuComponent } from './MainMenu/MainMenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    ListRecipeComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
