import Garage from './components/garage';
import { renderGarage } from './render/garage';
import './style.css';

renderGarage();
const garage = new Garage();
const cars = garage.getCars();