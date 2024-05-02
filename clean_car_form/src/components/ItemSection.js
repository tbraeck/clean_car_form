import React, { useState } from "react";
import VehicleCard from "./VehicleCard"; // Import the VehicleCard component

const ItemSection = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage section collapse/expand
  const [vehicles, setVehicles] = useState([]); // State to manage list of vehicles

  const dummyVehicles = [
    {
      id: 1,
      title: "E-Car",
      image: "car.jpg",
      cost: "$50/day"
    },
    {
      id: 2,
      title: "E-Truck",
      image: "https://static01.nytimes.com/newsgraphics/2023-02-14-big-evs/a09067a7b772d4328be9141db7df9f91b33c0e04/_assets/cars-rivian-rivian.jpg",
      cost: "$80/day"
    },
    {
      id: 3,
      title: "E-Van",
      image: "van.jpg",
      cost: "$80/day"
    },
    // Add more vehicles as needed
  ];

  // Function to fetch vehicles data (you can replace this with an actual API call)
  const fetchVehicles = () => {
    // Simulate API call
    setTimeout(() => {
      setVehicles(dummyVehicles);
    }, 1000);
  };

  // Function to toggle section collapse/expand
  const toggleSection = () => {
    setIsOpen(!isOpen);
    if (isOpen && vehicles.length === 0) {
      fetchVehicles(); // Fetch vehicles data when section is opened for the first time
    }
  };

  return (
    <div className="customer-info-section"> {/* Updated class name */}
      <div className="customer-info-header" onClick={toggleSection}> {/* Updated class name */}
        <div className="customer-info-title">Vehicle Information</div> {/* Updated class name */}
        <div className="collapsible-arrow">{isOpen ? "▼" : "▲"}</div>
      </div>
      {isOpen && (
        <div className="section-content"> {/* Updated class name */}
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemSection;
