import React, { PropTypes } from 'react';
import VehicleListRow from './VehicleListRow';

const VehicleList = ({ vehicles, deleteVehicle, searchKeyDown, searchVehicle}) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="input-group mb-3" style={{display: "flex", flexDirection: "row", width: "200px"}}>
          <input type="text" 
            placeholder="Search Vehicle by Make"
            className="form-control" 
            ariaLabel="Sizing example input" 
            ariaDescribedby="inputGroup-sizing-default"
            onKeyDown={searchKeyDown} 
            onChange={searchVehicle} />           
          <i className="fas fa-search" style={{ margin: "10px" }}></i>
        </div>
      </div>
      <div className="card-body">
      <table className="table table-striped ">
        <thead className="thead-light">
          <tr>
            <th scope="col">Make</th>
            <th scope="col">Model</th>
            <th scope="col">Body</th>
            <th scope="col">Transmission</th>
            <th scope="col">Color</th>
            <th scope="col">Fuel Type</th>
            <th scope="col">Engine Capacity</th>
            <th scope="col">Price</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle =>
            <VehicleListRow key={vehicle.id} vehicle={vehicle} rowDelete={deleteVehicle} />
          )}
        </tbody>
      </table> 
      </div>
    </div>
  );
};

VehicleList.propTypes = {
  vehicles: PropTypes.array.isRequired,
  deleteVehicle: PropTypes.func,
  searchKeyDown: PropTypes.func,
  searchVehicle: PropTypes.func
};

export default VehicleList;
