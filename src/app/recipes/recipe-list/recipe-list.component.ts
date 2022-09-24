import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Monster Burger', 'Recipe for Monster Burger', 'https://www.happyfoodstube.com/wp-content/uploads/2020/10/halloween-monster-burgers-recipe.jpg'),
    new Recipe('Salmon Pasta', 'Delicious Salmon Pasta!!!', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-smoked-salmon-pasta-horizontal-1542310073.png?resize=480:*'),
    new Recipe('Cucumber Salad', 'Cucumber Salad Meal.', 'https://images-gmi-pmc.edge-generalmills.com/f920cb90-3541-49fb-b9e6-2f9add86302b.jpg'),
    new Recipe('Iced Tea.', 'Chilled Iced Tea!!!', 'https://www.ohhowcivilized.com/wp-content/uploads/2019/05/0519-iced-tea-8-1.jpg'),
    new Recipe('Ice cold water.', 'Cold, distilled water.', 'https://www.news-medical.net/image.axd?picture=2021%2F7%2Fshutterstock_1548860402.jpg')
  ];

  fromRecipeDetail: Recipe;
  @Output() recipeComponentEmitter = new EventEmitter<Recipe>()

  constructor() {

  }

  ngOnInit(): void {

  }

  onReceiveRecipeDetail(recipeDetail: Recipe) {
    this.fromRecipeDetail = recipeDetail;
    this.recipeComponentEmitter.emit(recipeDetail);
    console.log({fromRecipeDetail: this.fromRecipeDetail});
  }

}
