class Car {
  private color: string = "";

  private name: string = "";

  constructor(name: string, color: string) {
    this.color = color;
    this.name = name;
  }

  public getColor(): string {
    return this.color;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

export default Car;
