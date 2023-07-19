import type { TCarObj } from "../type";
import Car from "./car";

class Garage {
  public async getCars(): Promise<TCarObj[]> {
    const response = await fetch('http://127.0.0.1:3000/garage');
    let data: TCarObj[] = await response.json();
    this.showCars(data);
    return data;
  }
  public createCar(name: string, color: string) {
    fetch("http://127.0.0.1:3000/garage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new Car(name, color)),
    })
    .then();
  }
  public showCars(data: TCarObj[]) {
    data.forEach(element => {
      console.log(element);
    });
  }
}

export default Garage;