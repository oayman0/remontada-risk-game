import '../assets/styles/SequenceDisplay.css'; // Import CSS file for styling

import React, { useState, useEffect } from 'react';
import ScoreCalculator from './ScoreCalculator';


const SequenceDisplay = ({ values }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    // Reset visibility when values prop changes
    setVisibleIndexes([]);
  }, [values]);

  const toggleVisibility = (index) => {
    if (visibleIndexes.includes(index)) {
      setVisibleIndexes(visibleIndexes.filter((i) => i !== index));
    } else {
      setVisibleIndexes([...visibleIndexes, index]);
    }
  };

  // Split the values into header and grid cell arrays
  const headerValues = values.slice(0, 4);
  const gridValues = values.slice(4);

  // Placeholder values for each row
  const placeholders = ['5', '10', '20', '40'];

  return (
    <>
    <div className="grid-container">
      {/* Render the header row */}
      {headerValues.map((value, index) => (
        <div key={index} className="button-55 grid-item header ">{value}</div>
        ))}
      {/* Render the grid cells */}
      {gridValues.map((value, index) => (
        <div
          key={index + 4}
          className={`grid-item cell  ${visibleIndexes.includes(index + 4) ? 'visible button-55' : 'button-64'}`}
          onClick={() => toggleVisibility(index + 4)}
        >
          {visibleIndexes.includes(index + 4) ? value : placeholders[Math.floor(index / 4)]}
        </div>
      ))}
    </div>

    <ScoreCalculator />
        </>
  );
};

export default SequenceDisplay;
