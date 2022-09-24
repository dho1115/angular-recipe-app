import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

  onRecipeItemClicked() {
    console.log(`${JSON.stringify(this.recipe)} has been clicked!!!`);
  }

  onSelected() {
    this.recipeSelected.emit(); //We do not need to pass anything to emit because the Recipe instances are inside recipe list.
  }

}
