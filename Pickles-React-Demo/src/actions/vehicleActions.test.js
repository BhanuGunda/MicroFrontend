import expect from 'expect';
import * as vehicleActions from './vehicleActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';



describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    const course = {id: 'a', title: 'b'};
    const expectedAction = {
      type: types.CREATE_VEHICLE_SUCCESS,
      course
    };

    const action = vehicleActions.createVehicleSuccess(course);

    expect(action).toEqual(expectedAction);
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_VEHICLES_SUCCESS when loading courses', (done) => {
    // example call to nock
    // nock('http://example.com')
    //   .get('/courses')
    //   .reply(200, { body: {course: [{id: 1, firstName: 'A', lastName:' B'}]}});

    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      { type: types.LOAD_VEHICLES_SUCCESS,
        body: {
          vehicles:  [{ id: 'a', title: 'a' }]
        }
      }
    ];

    const store = mockStore({vehicles: []}, expectedActions);
    store.dispatch(vehicleActions.loadVehicles()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect( actions[1].type).toEqual(types.LOAD_VEHICLES_SUCCESS);
      done();
    });
  });
});
