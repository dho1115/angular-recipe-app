import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

//Services.
import { RecipeService } from '../../Services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {

  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList([...this.recipe.ingredients]) //recipeService is the instance of our RecipeService service. addIngredientsToShoppingList is the method we created inside of that service.
  }
}
