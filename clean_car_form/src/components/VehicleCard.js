import React, { useState } from "react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa"; // Import icons from react-icons library

const VehicleCard = ({ vehicle }) => {
  const [isExpanded, setIsExpanded] = useState(true); // State to manage card expand/collapse
  const [vehicles, setVehicles] = useState([]); // State to manage list of vehicles

  const dummyVehicles = [
    {
      id: 1,
      title: "Car",
      image: "car.jpg",
      cost: "$50/day"
    },
    {
      id: 2,
      title: "Truck",
      image: "truck.jpg",
      cost: "$80/day"
    },
    {
      id: 3,
      title: "Van",
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
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded && vehicles.length === 0) {
      fetchVehicles(); // Fetch vehicles data when section is opened for the first time
    }
  };

  const handleBookClick = () => {
    // Handle booking action here
    console.log("Booking vehicle:", vehicle);
  };

  const handleAddToCart = () => {
    // Handle adding to cart action here
    console.log("Adding vehicle to cart:", vehicle);
  };

  return (
    <div className="vehicle-card">
      <div className="card-header" onClick={toggleExpansion}>
        <h3 className="card-title">{vehicle.title}</h3>
        <div className="expand-icon">{isExpanded ? "▲" : "▼"}</div>
      </div>
      {isExpanded && (
        <div className="card-body">
        <img
            src={vehicle.image}
            alt={vehicle.title}
            className="vehicle-image"
            style={{ width: "250px", height: "150px", borderRadius: "8px" }}
          />          
          <div className="vehicle-details">
            <div className="cost">Cost: {vehicle.cost}</div>
            <div className="action-buttons">
              <button className="book-button" onClick={handleBookClick}>
                <FaCalendarAlt /> Book
              </button>
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                <FaPlus /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleCard;
