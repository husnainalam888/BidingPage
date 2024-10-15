import React from "react";
import "./VehicleInformation.css";
import Colors from "../../../styles/colors";
const VehicleInformation = () => {
  const data = [
    {
      label: "Document Type",
      value: "VCC",
    },
    {
      label: "Make",
      value: "Toyota",
    },
    {
      label: "Model",
      value: "Camry",
    },
    {
      label: "Year",
      value: "2022",
    },
    {
      label: "Color",
      value: "Pearl White",
    },
    {
      label: "Engine Type",
      value: "Hybrid",
    },
    {
      label: "Fuel Type",
      value: "Petrol",
    },
    {
      label: "Transmission",
      value: "Automatic",
    },
    {
      label: "Mileage",
      value: "15,000 km",
    },
    {
      label: "VIN",
      value: "1HGCM82633A123456",
    },
    {
      label: "Registration Number",
      value: "ABC-1234",
    },
    {
      label: "Seating Capacity",
      value: "5",
    },
    {
      label: "Horsepower",
      value: "203 hp",
    },
    {
      label: "Torque",
      value: "184 lb-ft",
    },
    {
      label: "Drivetrain",
      value: "Front-Wheel Drive",
    },
    {
      label: "Top Speed",
      value: "180 km/h",
    },
    {
      label: "Price",
      value: "$30,000",
    },
  ];

  return (
    <div className='vehicle-info-container'>
      <div className='vehicle-info-title-container'>
        <h1 className='vehicle-info-title'>VEHICLE INFORMATION</h1>
      </div>
      <div className='vehicle-data-container'>
        {data.map((e) => {
          return (
            <div className='vehicle-data-item'>
              <p className='vehicle-data-label'>{e.label}</p>
              <p className='vehichle-data-value'>{e.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VehicleInformation;
