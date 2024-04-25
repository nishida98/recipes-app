import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  recipeSelected: Recipe
  id: number
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    // const id = this.route.snapshot.params['id']
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeSelected = this.recipeService.getRecipeById(this.id);
      }
    )
  }

  addIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeSelected.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

  // showRecipe(recipeSelected: Recipe) {
  //   this.recipe = recipeSelected
  // }
}
