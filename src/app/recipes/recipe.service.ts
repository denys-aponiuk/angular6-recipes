import { Recipe } from './recipe.model';
import { Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  currentId: number;

  private recipes: Recipe[] = [
    new Recipe('Pizza',
      'this is simply test',
      'https://www.bbcgoodfood.' +
      'com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('meat', 2),
        new Ingredient('tomatos', 4)
      ]),
    new Recipe('Burger',
      'this is simply test',
      'http://www.islam.ru/sites/default/files/img/2017/news/90-main-image-w1480.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('cheese', 4)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addSelectedIngredits(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    this.recipes[id] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
