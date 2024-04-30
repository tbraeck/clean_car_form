import React, { useState } from "react";

const TestDriveFormSection = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage section collapse/expand
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(0); // Duration in minutes

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleDurationChange = (event) => {
    setDuration(parseInt(event.target.value));
  };

  return (
    <div className="test-drive-section">
      <div className="test-drive-header" onClick={toggleSection}>
        <div className="test-drive-title">Test Drive Period</div>
        <div className="collapsible-arrow">{isOpen ? "▼" : "▲"}</div>
      </div>
      {isOpen && (
        <div className="section-content">
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </div>
          <div className="form-group">
            <label>Start Time</label>
            <input type="time" value={startTime} onChange={handleStartTimeChange} />
          </div>
          <div className="form-group">
            <label>Duration (minutes)</label>
            <select value={duration} onChange={handleDurationChange}>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
              {/* Add more options for 15-minute intervals */}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestDriveFormSection;
