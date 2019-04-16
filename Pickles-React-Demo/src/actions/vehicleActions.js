import * as types from './actionTypes';
import MockVehicleApi from '../api/mockVehicleApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadVehicleSuccess(vehicles) {
  return { type: types.LOAD_VEHICLES_SUCCESS, vehicles };
}

export function updateVehicleSuccess(vehicle) {
  return { type: types.UPDATE_VEHICLE_SUCCESS, vehicle };
}

export function createVehicleSuccess(vehicle) {
  return { type: types.CREATE_VEHICLE_SUCCESS, vehicle };
}

export function deleteVehicleSuccess(vehicle) {
  return { type: types.DELETE_VEHICLE_SUCCESS, vehicle };
}

export function searchVehicleSuccess(str) {
  return { type: types.SEARCH_VEHICLE_SUCCESS, str };  
}

export function loadVehicles() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return MockVehicleApi.getAllVehicles().then(vehicles => {
      dispatch(loadVehicleSuccess(vehicles));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveVehicle(vehicle) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return MockVehicleApi.saveVehicle(vehicle).then(vehicle => {
      vehicle.id ? dispatch(updateVehicleSuccess(vehicle)) :
        dispatch(createVehicleSuccess(vehicle));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteVehicle(vehicle) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return MockVehicleApi.deleteVehicle(vehicle).then(vehicle => {
      dispatch(deleteVehicleSuccess(vehicle));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function searchVehicle(searchString) {
  return function (dispatch, getState) {
    dispatch(searchVehicleSuccess(searchString));
  };
}