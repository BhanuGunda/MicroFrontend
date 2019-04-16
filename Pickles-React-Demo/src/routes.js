import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import VehiclesPage from './components/vehicle/VehiclesPage';
import ManageVehiclePage from './components/vehicle/ManageVehiclePage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="vehicles" component={VehiclesPage} />
    <Route path="vehicle" component={ManageVehiclePage} />
  </Route>
);
