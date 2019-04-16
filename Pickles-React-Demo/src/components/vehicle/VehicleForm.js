import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const VehicleForm = ({ vehicle, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h1>Manage Vehicle</h1>
      <TextInput
        name="make"
        label="Make"
        placeholder="Please Enter Make"
        value={vehicle.make}
        onChange={onChange}
        error={errors.make} />


      <TextInput
        name="model"
        label="Model"
        placeholder="Please Enter Model"
        value={vehicle.model}
        onChange={onChange}
        error={errors.model} />

      <SelectInput
        name="body"
        label="Body"
        placeholder="Please Enter Body"
        value={vehicle.body}
        defaultOption="Select Body"
        options={[{ value: "Sedan", text: "Sedan" }, { value: "Van", text: "Van" }, { value: "Wagon", text: "Wagon" }, { value: "Hatchback", text: "Hatchback" }, { value: "Wagon", text:"Wagon"}]}
        onChange={onChange}
        error={errors.body} />

      <SelectInput
        name="transmission"
        label="Transmission"
        placeholder="Please Enter Transmission"
        value={vehicle.transmission}
        defaultOption="Select Transmission"
        options={[{ value: "Automatic", text: "Automatic" }, { value: "Manual", text:"Manual"}]}
        onChange={onChange}
        error={errors.transmission} />

      <TextInput
        name="color"
        label="Color"
        placeholder="Please Enter Color"
        value={vehicle.color}
        onChange={onChange}
        error={errors.color} />

      <SelectInput
        name="fuelType"
        label="Fuel Type"
        value={vehicle.fuelType}
        defaultOption="Select Fuel Type"
        options={[{ value: "Petrol", text: "Petrol" }, { value: "Disel", text: "Disel" }, { value: "Gas", text:"Gas"}]}
        onChange={onChange}
        error={errors.fuelType} />

      <TextInput
        name="engineCapacity"
        label="Engine Capacity"
        placeholder="Please Enter Engine Capacity"
        value={vehicle.engineCapacity}
        onChange={onChange}
        error={errors.engineCapacity} />

      <TextInput
        name="price"
        type="number"
        label="Price"
        placeholder="Please Enter Price"
        value={vehicle.price}
        onChange={onChange}
        error={errors.price} />
      
      <div>
        <input
          type="reset"
          style={{margin: '0px 20px 20px 0px'}}
          className="btn btn-primary" />

        <input
          type="submit"
          style={{ margin: '0px 20px 20px 0px' }}
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave} />
      </div>
      
    </form>
  );
};

VehicleForm.propTypes = {
  vehicle: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default VehicleForm;
