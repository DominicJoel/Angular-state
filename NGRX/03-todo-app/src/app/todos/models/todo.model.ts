export class Todo {
  public id: number;
  public text: string;
  public completed: boolean;

  constructor(texto: string) {
    this.text = texto;
    this.id = Math.random();
    this.completed = false;
  }
}
