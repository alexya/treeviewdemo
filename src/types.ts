export class Item {
  name: string;
  children: Item[];

  constructor(name: string, children: Item[] = []) {
    this.name = name;
    this.children = children;
  }
}
