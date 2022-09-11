export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  logArguments() {
    return { name: this.name, description: this.description, imagePath: this.imagePath };
  }

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
