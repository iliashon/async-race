import './style.css';
import Header from './components/header';
import Garage from './components/garage';

document.addEventListener('DOMContentLoaded', () => {
  Header.renderHeader();
  const garage = new Garage();
  garage.renderUpdatePanel();
});
