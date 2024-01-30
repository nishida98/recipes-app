import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  constructor(private recipeService: RecipeService){}

  addIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeSelected.ingredients)
  }

  @Input() recipeSelected: Recipe

  // showRecipe(recipeSelected: Recipe) {
  //   this.recipe = recipeSelected
  // }
}
