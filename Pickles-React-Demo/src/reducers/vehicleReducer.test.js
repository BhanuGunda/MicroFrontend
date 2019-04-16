import expect from 'expect';
import vehicleReducer from './vehicleReducer';
import * as actions from '../actions/vehicleActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = { title: 'C' };

    const action = actions.createVehicleSuccess (newCourse);

    const newState = vehicleReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const vehicle = {id: 'B', title: 'New Title'};
    const action = actions.updateVehicleSuccess (vehicle);

    const newState = vehicleReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == vehicle.id);
    const untouchedCourse = newState.find(a => a.title == 'A');

    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
