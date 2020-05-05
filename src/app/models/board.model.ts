export class Column {
  constructor(public name: string, public tasks: Array<string>) {}
}

export class Board {
  constructor(public name: string, public columns: Column[]) {}
}
