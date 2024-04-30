import React, { useState } from "react";

const CustomerInfoSection = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage section collapse/expand
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [state, setState] = useState("");

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="customer-info-section"> {/* Updated class name */}
      <div className="customer-info-header" onClick={toggleSection}> {/* Updated class name */}
        <div className="customer-info-title">Customer Information</div> {/* Updated class name */}
        <div className="collapsible-arrow">{isOpen ? "▼" : "▲"}</div>
      </div>
      {isOpen && (
        <div className="section-content"> {/* Updated class name */}
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <div className="phone-input">
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="US">+1 (US)</option>
                {/* Add more options for other countries */}
              </select>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>State/Country</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerInfoSection;
