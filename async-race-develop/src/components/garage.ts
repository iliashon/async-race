import { TAttributeDescriptionForTheButton } from '../../types';

class Garage {
  private main: HTMLElement = document.createElement('main');

  private arrAttributesButtonMenegment: TAttributeDescriptionForTheButton = [
    ['race-btn', 'Race'],
    ['reset-btn', 'Reset'],
    ['generate-btn', 'Generate cars'],
  ];

  public renderUpdatePanel(): void {
    this.main.id = 'garage';
    document.body.append(this.main);
    this.renderControllerCreateOrUpdate('input-textCreate', 'input-color-create', 'create-control', 'Create', 'create-btn');
    this.renderControllerCreateOrUpdate('input-text-update', 'input-color-update', 'update-control', 'Update', 'update-btn');
    this.renderButtonManagement('button-menegment', this.arrAttributesButtonMenegment);
    this.renderCarList('car-list');
  }

  private renderControllerCreateOrUpdate(
    idTypeText: string,
    idTypeColor: string,
    classDiv: string,
    buttonInnerText: string,
    buttonId: string,
  ): void {
    const div: HTMLElement = document.createElement('div');
    div.classList.add(classDiv);
    this.main.append(div);

    const inputText: HTMLInputElement = document.createElement('input');
    inputText.classList.add('input-controll');
    inputText.type = 'text';
    inputText.id = idTypeText;
    div.append(inputText);

    const inputColor: HTMLInputElement = document.createElement('input');
    inputColor.classList.add('input-controll');
    inputColor.type = 'color';
    inputColor.id = idTypeColor;
    div.append(inputColor);

    const button: HTMLButtonElement = document.createElement('button');
    button.innerText = buttonInnerText;
    button.id = buttonId;
    button.classList.add('create-or-update-btn');
    div.append(button);
  }

  private renderButtonManagement(
    classDiv: string,
    arrAttributes: TAttributeDescriptionForTheButton,
  ): void {
    const div: HTMLElement = document.createElement('div');
    div.classList.add(classDiv);
    this.main.append(div);

    for (let i = 0; i < arrAttributes.length; i += 1) {
      const buttonId = arrAttributes[i][0];
      const buttonInnetText = arrAttributes[i][1];
      const button: HTMLButtonElement = document.createElement('button');
      button.innerText = buttonInnetText;
      button.id = buttonId;
      button.classList.add('menegment-btn');
      div.append(button);
    }
  }

  private renderCarList(classDiv: string): void {
    const div: HTMLElement = document.createElement('div');
    div.classList.add(classDiv);
    this.main.append(div);
  }
}

export default Garage;
