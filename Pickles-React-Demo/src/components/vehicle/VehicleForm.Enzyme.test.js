import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import VehicleForm from './VehicleForm';

function setup(saving) {
  let props = {
    vehicle: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  return shallow(<VehicleForm {...props} />);
}

describe('VehicleForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Vehicle');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when not saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
