import Garage from './components/garage';
import RenderElementsPage from './render/garage';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const renderClass = new RenderElementsPage();
  renderClass.createElement();
  const garage = new Garage();
  const cars = garage.getCars();
})