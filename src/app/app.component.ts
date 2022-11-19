import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {
  title = 'recipe-app';
  loadedFeature: string = 'recipe';
  recipeDetails: Recipe;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }


}
