import React from 'react';
import ReactDOM from 'react-dom';
import MainNav from './components/NavBar'
import App from './containers/App'
import { Main_Router } from './router.js';
ReactDOM.render(Main_Router, document.querySelector("#app-container"));
