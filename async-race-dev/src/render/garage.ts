export function renderGarage(): void {
  const container = document.createElement("section");
  const createCarForm = document.createElement("div");
  const listCars = document.createElement("div");
  const form = `<form action="" class="" id="create-car">
                  <input type="text" name="" id="">
                  <input type="color" name="" id="">
                  <button id="create-btn">Create</button>
                </form>
                <form action="" class="" id="update-car">
                  <input type="text" name="" id="">
                  <input type="color" name="" id="">
                  <button id="update-btn">Update</button>
                </form>
                <button id="reset-btn">Reset</button>
                <button id="race-btn">Race</button>
                <button id="generate-btn">Generate cars</button>`;

  container.classList.add("container");
  listCars.classList.add("list-cars");

  createCarForm.innerHTML = form;
  document.body.append(container);
  container.append(createCarForm, listCars);
}
