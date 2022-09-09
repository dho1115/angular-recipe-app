import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Monster Burger', 'Recipe for Monster Burger', 'https://www.happyfoodstube.com/wp-content/uploads/2020/10/halloween-monster-burgers-recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
