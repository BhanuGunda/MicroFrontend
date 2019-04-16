import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.


const vehicles = [
  {
    id: 1,
    make: "Hyundai",
    model: "2018 Hyundai Accent",
    body: "Hatchback",
    transmission: "Automatic",
    color: "Red",
    fuelType: "Petrol",
    engineCapacity: "1.6",
    price: 13988
  },
  {
    id: 2,
    make: "Nissan",
    model: "2013 Nissan Dualis",
    body: "Hatchback",
    transmission: "Manual",
    color: "Maroon",
    fuelType: "Petrol",
    engineCapacity: "2",
    price: 14990
  },
  {
    id: 3,
    make: "Ford",
    model: "2016 Ford Falcon",
    body: "Sedan",
    transmission: "Automatic",
    color: "White",
    fuelType: "Petrol",
    engineCapacity: "4",
    price: 17100
  },
  {
    id: 4,
    make: "Mercedes-Benz",
    model: "1993 Mercedes-Benz 400SE",
    body: "Sedan",
    transmission: "Automatic",
    color: "Blue",
    fuelType: "Petrol",
    engineCapacity: "4.2",
    price: 14222
  },
  {
    id: 5,
    make: "Toyota",
    model: "2014 Toyota 86",
    body: "Coupe",
    transmission: "Manual",
    color: "Satin White",
    fuelType: "Petrol",
    engineCapacity: "2",
    price: 20990
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (vehicle) => {
  return replaceAll(vehicle.make, ' ', '-');
};

class MockVehicleApi {
  static getAllVehicles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], vehicles));
      }, delay);
    });
  }

  static saveVehicle(vehicle) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minVehicleMakeLength = 1;
        if (vehicle.make.length < minVehicleMakeLength) {
          reject(`Make must be at least ${minVehicleMakeLength} characters.`);
        }

        if (vehicle.id) {
          const existingVehicleIndex = vehicles.findIndex(a => a.id == vehicle.id);
          vehicles.splice(existingVehicleIndex, 1, vehicle);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new vehicles in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          vehicle.id = generateId(vehicle);
          vehicles.push(vehicle);
        }

        resolve(Object.assign({}, vehicle));
      }, delay);
    });
  }

  static deleteVehicle(v) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfVehicleToDelete = vehicles.findIndex(vehicle => vehicle.id == v.id);
        vehicles.splice(indexOfVehicleToDelete, 1);
        resolve(Object.assign({}, v));
      }, delay);
    });
  }
}

export default MockVehicleApi;
