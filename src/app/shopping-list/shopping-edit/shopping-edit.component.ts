import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingrediant.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('nameAmount') nameAmountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(item: HTMLInputElement): void {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.nameAmountRef.nativeElement.value;
    const newIngrediant = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngrediant);
  }

}
