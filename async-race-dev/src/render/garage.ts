
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

class RenderElementsPage {
  private container = document.createElement("section");
  private carForm = document.createElement("div");
  private listCars = document.createElement("div");
  private updateCarForm = document.createElement("form");
  private createCarForm = document.createElement("form");
  private panelControl = document.createElement("div");
  private header = document.createElement("header");

  private renderBasicDiv(): void {
    this.container.classList.add("container");
    this.listCars.classList.add("list-cars");
    this.carForm.classList.add("cars-control-panel");
    document.body.append(this.header ,this.container);
    this.container.append(this.carForm, this.listCars);
  }

  private renderHeader() {
    this.header.id = "header";
    const garageBtn = document.createElement("button");
    const winnersBtn = document.createElement("button");
    const logo = document.createElement("img");
    const headerBtnNav = document.createElement("nav");
    logo.src = '../assets/img/logo.png';
    logo.classList.add("header-logo");
    headerBtnNav.classList.add("header-nav-bar");
    garageBtn.classList.add("header-btn");
    winnersBtn.classList.add("header-btn");
    garageBtn.id = "garage-btn";
    winnersBtn.id = "winners-btn";
    garageBtn.innerText = "Garage";
    winnersBtn.innerText = "Winners";
    headerBtnNav.append(garageBtn, winnersBtn);
    this.header.append(logo, headerBtnNav);
  }

  private renderCreateCarForm(): void {
    const inputCarName = document.createElement("input");
    const inputCarColor = document.createElement("input");
    const buttonCarCreate = document.createElement("button");
    buttonCarCreate.classList.add("form-car-btn");
    buttonCarCreate.id = "create-car-btn";
    buttonCarCreate.innerText = "Create";
    inputCarColor.type = "color";
    inputCarName.type = "text";
    this.createCarForm.classList.add("car-form");
    this.createCarForm.id = "create-car-form";
    this.createCarForm.append(inputCarName, inputCarColor, buttonCarCreate);
    this.carForm.append(this.createCarForm);
  }

  private renderPanelControl(): void {
    this.panelControl.classList.add("control-panel");
    const raceBtn = document.createElement("button");
    const resetBtn = document.createElement("button");
    const generateBtn = document.createElement("button");
    raceBtn.classList.add("panel-btn");
    resetBtn.classList.add("panel-btn");
    generateBtn.classList.add("panel-btn");
    raceBtn.id = "race-btn";
    resetBtn.id = "reset-btn";
    generateBtn.id = "generate-btn";
    raceBtn.innerText = "Race";
    resetBtn.innerText = "Reset";
    generateBtn.innerText = "Generate cars";
    this.panelControl.append(raceBtn, resetBtn, generateBtn);
  }

  private renderUpdateCarForm(): void {
    const inputCarName = document.createElement("input");
    const inputCarColor = document.createElement("input");
    const buttonCarUpdate = document.createElement("button");
    buttonCarUpdate.classList.add("form-car-btn");
    buttonCarUpdate.id = "update-car-btn";
    buttonCarUpdate.innerText = "Update";
    inputCarColor.type = "color";
    inputCarName.type = "text";
    this.updateCarForm.classList.add("car-form");
    this.updateCarForm.id = "update-car-form";
    this.updateCarForm.append(inputCarName, inputCarColor, buttonCarUpdate);
    this.carForm.append(this.updateCarForm, this.panelControl);
  }

  public createElement(): void {
    this.renderBasicDiv();
    this.renderCreateCarForm();
    this.renderUpdateCarForm();
    this.renderPanelControl();
    this.renderHeader();
  }
}

export default RenderElementsPage;
