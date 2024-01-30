import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    
    constructor(private shoppingService: ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            "Test Recipe", 
            "Test Description", 
            "https://grillmomma.com/wp-content/uploads/2020/12/IMG_1986-3-scaled-e1609301042548.jpg",
            [
                new Ingredient("I1", 12),
                new Ingredient("I2", 21)
            ]),
        new Recipe(
            "Test Recipe", 
            "Test Description", 
            "https://grillmomma.com/wp-content/uploads/2020/12/IMG_1986-3-scaled-e1609301042548.jpg",
            [
                new Ingredient("I1", 12),
                new Ingredient("I2", 21)
            ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients)
    }

}