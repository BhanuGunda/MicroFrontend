import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';


class VehicleListRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {vehicle, rowDelete} = this.props;
    return (
      <tr>
        <td>{vehicle.make}</td>
        <td>{vehicle.model}</td>
        <td>{vehicle.body}</td>
        <td>{vehicle.transmission}</td>
        <td>{vehicle.color}</td>
        <td>{vehicle.fuelType}</td>
        <td>{`${vehicle.engineCapacity} Ltr`}</td>
        <td>{`$${vehicle.price}`}</td>
        <td>
          <span >
            <Link to={{ pathname: `/vehicle`, state: vehicle }}>
              <i className="fas fa-edit"></i>
            </Link>
          </span>
          <span onClick={() => rowDelete(vehicle)}><i className="fas fa-trash-alt"></i></span>
        </td>
      </tr>
    )
  }
}

VehicleListRow.propTypes = {
  vehicle: PropTypes.object.isRequired,
  rowDelete: PropTypes.func
};

export default VehicleListRow;
