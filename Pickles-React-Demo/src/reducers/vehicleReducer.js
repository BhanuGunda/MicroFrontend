import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function vehicleReducer(state = initialState.vehicles, action) {
  switch (action.type) {
    case types.CREATE_VEHICLE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.vehicle)
      ];

    case types.LOAD_VEHICLES_SUCCESS:
      return Object.assign([], action.vehicles); //[...action.vehicles];

    case types.UPDATE_VEHICLE_SUCCESS:
      return [
        ...state.filter(vehicle => vehicle.id !== action.vehicle.id),
        Object.assign({}, action.vehicle)
      ];

    case types.DELETE_VEHICLE_SUCCESS:
      return [
        ...state.filter(vehicle => vehicle.id !== action.vehicle.id)
      ];

    case types.SEARCH_VEHICLE_SUCCESS: 
      console.log(action,"action");
      //return [...state] when no matched string found
      return [...state.filter(vehicle => { console.log(vehicle.make,action.str); return vehicle.make == action.str;})];

    default:
      return state;
  }
}
