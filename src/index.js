import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
// import Badge from './component/Badge';
import Badges from '../src/pages/Badges'
import './Global.css'

// const element = <h1> Hello,
//     Platzi Badges! </h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(
// />, container);

ReactDOM.render(<Badges/>,container)