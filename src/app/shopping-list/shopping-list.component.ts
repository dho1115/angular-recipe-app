import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

//Service.
import { ShoppingListService } from '../Services/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;

      /* .subscribe allows us to listen to/track/retrieve any changes and updates.

      How is it able to do this? It is able to do this because of how the .emit() found in shopping-list.service.ts and .subscribe() found here works: Anything that is emitted by this.ingredientsChanged.emit() will be automatically passed on as the ARGUMENT inside this function (callback function).

      In this case, if you look inside shopping-list.service.ts, this.ingredients.slice() was emitted.

      Therefore, this.ingredients.slice() will be the ARGUMENT inside the ingredients: Ingredient[] parameter.

      So, if we want to update ingredients: Ingredient[] property/variable located inside this class (ShoppingListComponent) with the most up to date ingredients list, we just do:

      this.ingredients = ingredients;
      */
     
    })
  }
}
