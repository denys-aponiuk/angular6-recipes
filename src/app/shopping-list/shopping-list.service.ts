import { Ingredient } from '../shared/ingrediant.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 12),
        new Ingredient('Banana', 20)
    ];

    constructor() { }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingrediant: Ingredient): void {
        this.ingredients.push(ingrediant);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addSelectedIngredits(value: Ingredient[]) {
        this.ingredients.push(...value);
    }
}
