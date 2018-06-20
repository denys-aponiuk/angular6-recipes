import { Ingredient } from '../shared/ingrediant.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

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
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addSelectedIngredits(ingrediants: Ingredient[]) {
        this.ingredients.push(...ingrediants);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
