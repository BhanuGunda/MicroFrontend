import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';

import * as vehicleActions from '../../actions/vehicleActions';
import VehicleForm from './VehicleForm';

class ManageVehiclePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      vehicle: Object.assign({}, this.props.vehicle),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveVehicle = this.saveVehicle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.vehicle.id != nextProps.vehicle.id) {
      this.setState({vehicle: Object.assign({}, nextProps.vehicle)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let vehicle = this.state.vehicle;
    vehicle[field] = event.target.value;
    return this.setState({vehicle: vehicle});
  }

  vehicleFormIsValid() {
    let formIsValid = true;
    const errors = {};

    if (this.state.vehicle.make.length < 4) {
      errors.title = 'Make must be at least 4 characters';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveVehicle(event) {
    event.preventDefault();

    if (!this.vehicleFormIsValid()) return;

    this.setState({saving: true});
    this.props.actions.saveVehicle(this.state.vehicle)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Vehicle saved');
    this.context.router.push('/vehicles');
  }

  render() {
    return (
      <VehicleForm
        onChange={this.updateCourseState}
        onSave={this.saveVehicle}
        vehicle={this.state.vehicle}
        errors={this.state.errors}
        saving={this.state.saving} />
    );
  }
}

ManageVehiclePage.propTypes = {
  vehicle: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageVehiclePage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getVehicleById(vehicles, id) {
  const vehicle = vehicles.filter(vehicle => vehicle.id == id);
  if (vehicle) return vehicle[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const vehicleId = ownProps.location.state && ownProps.location.state.id;
  console.log("ownProps ",ownProps);
  let vehicle = { id: '', make: '', model: '', body: '', transmission: '', color: '', fuelType: '', engineCapacity: '', price: ''};

  if (vehicleId && state.vehicles.length > 0) {
    vehicle = getVehicleById(state.vehicles, vehicleId);
  }

  return {
    vehicle: vehicle
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(vehicleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageVehiclePage);
