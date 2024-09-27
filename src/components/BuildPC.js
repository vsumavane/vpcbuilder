import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PerformanceStats from './PerformanceStats';
import ExpenseEvaluation from './ExpenseEvaluation'; // Import the ExpenseEvaluation component

const PartSelection = ({ label, part, options, selectedValue, onChange, required }) => (
  <div className="part-selection">
    <h3>{label}</h3>
    <select
      value={selectedValue}
      onChange={(e) => onChange(part, e.target.value)}
      required={required}
    >
      <option value="">-- Choose {label} --</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

PartSelection.propTypes = {
  label: PropTypes.string.isRequired,
  part: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

PartSelection.defaultProps = {
  required: false
};

function BuildPC() {
  const [selectedParts, setSelectedParts] = useState({
    cpu: '',
    motherboard: '',
    gpu: '',
    ram: '',
    storage: '',
    pcie: '',
    cooling: '',
    powerSupply: '',
    cabinet: ''
  });

  const handlePartSelection = (part, value) => {
    setSelectedParts(prevParts => ({
      ...prevParts,
      [part]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Parts:', selectedParts);
  };

  const partOptions = {
    cpu: ['Intel Core i9', 'AMD Ryzen 9', 'Intel Core i7', 'AMD Ryzen 7'],
    motherboard: ['MSI B550', 'Asus ROG Strix B550', 'Gigabyte Z490', 'Asrock X570'],
    gpu: ['Nvidia RTX 3080', 'AMD Radeon RX 6900 XT', 'Nvidia RTX 3070', 'AMD Radeon RX 6800'],
    ram: ['Corsair Vengeance 16GB', 'G.Skill Ripjaws 32GB', 'Kingston HyperX 16GB', 'Crucial Ballistix 32GB'],
    storage: ['Samsung 970 EVO 1TB', 'WD Black SN750 1TB', 'Seagate Barracuda 2TB', 'Crucial MX500 1TB'],
    pcie: ['WiFi 6 Card', 'Sound Card', 'Capture Card'],
    cooling: ['NZXT Kraken X63', 'Corsair H100i', 'Noctua NH-D15'],
    powerSupply: ['Corsair RM750x', 'EVGA 650 GQ', 'Seasonic Focus Plus 850'],
    cabinet: ['NZXT H510', 'Corsair 4000D', 'Lian Li PC-O11']
  };

  return (
    <div className="build-pc-section container">
      <h2>Build Your PC</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(partOptions).map(part => (
          <PartSelection
            key={part}
            label={part.charAt(0).toUpperCase() + part.slice(1)}
            part={part}
            options={partOptions[part]}
            selectedValue={selectedParts[part]}
            onChange={handlePartSelection}
            required={['cpu', 'motherboard', 'ram', 'storage', 'powerSupply', 'cabinet'].includes(part)}
          />
        ))}
        <button type="submit">Save Configuration</button>
      </form>

      <PerformanceStats selectedParts={selectedParts} />
      <ExpenseEvaluation selectedParts={selectedParts} /> {/* Add ExpenseEvaluation component */}
    </div>
  );
}

export default BuildPC;
