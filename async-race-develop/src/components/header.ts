class Header {
  public static renderHeader(): void {
    const header: HTMLElement = document.createElement('header');
    const garageBtn: HTMLButtonElement = document.createElement('button');
    const winnersBtn: HTMLButtonElement = document.createElement('button');
    header.id = 'header';
    garageBtn.id = 'garage-btn';
    winnersBtn.id = 'winners-btn';
    garageBtn.innerText = 'Garage';
    winnersBtn.innerText = 'Winners';
    document.body.append(header);
    header.append(garageBtn, winnersBtn);
  }
}

export default Header;
