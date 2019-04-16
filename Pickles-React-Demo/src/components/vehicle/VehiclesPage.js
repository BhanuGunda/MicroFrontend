import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';

import * as vehicleActions from '../../actions/vehicleActions';
import VehicleList from './VehicleList';
import { browserHistory, withRouter} from 'react-router';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class VehiclesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteVehicle = this.deleteVehicle.bind(this);
    this.searchVehicle = this.searchVehicle.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
  }

  componentWillMount() {
    this.timer = null;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/vehicle');
  }

  deleteVehicle(vehicle) {
    this.props.actions.deleteVehicle(vehicle)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
      });
  }

  redirect() {
    toastr.success('Vehicle deleted');
    browserHistory.push('/vehicles');
  }

  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer);
      this.triggerChange(e.target.value);
    }
  }

  triggerChange(val) {
    console.log("value ",val);
    this.props.actions.searchVehicle(val);
  }

  searchVehicle(e) {
    e.preventDefault();
    clearTimeout(this.timer);
    this.timer = setTimeout(this.triggerChange.bind(this,e.target.value), WAIT_INTERVAL);
  }

  render() {
    const { vehicles } = this.props;
    return (
      <div>
        <input
          type="submit"
          style={{ margin: '0px 20px 20px 0px' }}
          value="Add Vehicle"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}/>
        <VehicleList vehicles={vehicles} 
          deleteVehicle={this.deleteVehicle} 
          searchVehicle={this.searchVehicle}
          searchKeyDown={this.handleKeyDown}/>
      </div>
    );
  }
}

VehiclesPage.propTypes = {
  vehicles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    vehicles: state.vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(vehicleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VehiclesPage));
