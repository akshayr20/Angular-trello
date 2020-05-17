export class Task {
  constructor(public id: number, public desc: string) {}
}

export class Column {
  constructor(
    public id: number,
    public name: string,
    public tasks: Array<Task>
  ) {}
}

export class Board {
  constructor(
    public id: number,
    public name: string,
    public columns: Column[]
  ) {}
}
