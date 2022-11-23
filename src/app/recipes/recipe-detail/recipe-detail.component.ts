import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

//Services.
import { ShoppingListService } from '../../Services/shopping-list.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private _shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {

  }

  addToList() {
    console.log("Will emit the following (below) to shopping-list.component.ts (where it will show up inside shopping-list.component.html).");
    console.log({ recipe: this.recipe.ingredients });
    this._shoppingListService.addIngredients([...this.recipe.ingredients]);
  } //emit recipe to list.

}
