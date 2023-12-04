import Model from "../../Models/Model";

export default class Creator {
  private static instance: Creator | null = null;
  private classes: Array<Model> = [];

  private constructor() { }

  public static getInstance(): Creator {
    if (Creator.instance === null) {
      Creator.instance = new Creator();
    }
    return Creator.instance;
  }
  public addClass(model: Model) {
    this.classes.push(model);
  }

  public outClass(): Array<Model> {
    return this.classes;
  }
  public clean() {
    this.classes = [];
  }
}