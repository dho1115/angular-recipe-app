import { Ingredient } from '../shared/ingredient.model';
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  // logArguments() {
  //   return { name: this.name, description: this.description, imagePath: this.imagePath };
  // }

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients; //this.ingredients refers to public ingredients in the property above.
  }
}
