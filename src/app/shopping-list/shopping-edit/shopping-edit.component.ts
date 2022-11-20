import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'

//Services.
import { ShoppingListService } from '../../Services/shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient); //this.slService comes from private slService. addIngredient is a 'method' that takes in an argument (newIngredient) and this method (addIngredient) was created back in ShoppingListService (shopping-list.service.ts).
  }

}
