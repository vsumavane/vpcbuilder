import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Sample data for pre-built PCs (can be replaced with an API call)
const preBuiltPCs = [
  {
    id: 1,
    name: 'Gaming Beast',
    cpu: 'Intel Core i9',
    gpu: 'Nvidia RTX 3080',
    ram: '32GB DDR4',
    storage: '2TB SSD',
    price: 2500,
  },
  {
    id: 2,
    name: 'Workstation Pro',
    cpu: 'AMD Ryzen 9',
    gpu: 'Nvidia RTX 3070',
    ram: '64GB DDR4',
    storage: '1TB SSD + 2TB HDD',
    price: 3000,
  },
  {
    id: 3,
    name: 'Budget Gamer',
    cpu: 'Intel Core i5',
    gpu: 'Nvidia GTX 1660',
    ram: '16GB DDR4',
    storage: '512GB SSD',
    price: 1000,
  },
];

function PreBuiltPC() {
  const [selectedPC, setSelectedPC] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadPC = (pc) => {
    setLoading(true);
    // Simulate an API call with a timeout
    setTimeout(() => {
      setSelectedPC(pc);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="prebuilt-pc container">
      <h2>Load Pre-Built PCs</h2>

      <div className="pc-list">
        {preBuiltPCs.map((pc) => (
          <div className="pc-card" key={pc.id}>
            <h3>{pc.name}</h3>
            <p><strong>CPU:</strong> {pc.cpu}</p>
            <p><strong>GPU:</strong> {pc.gpu}</p>
            <p><strong>RAM:</strong> {pc.ram}</p>
            <p><strong>Storage:</strong> {pc.storage}</p>
            <p><strong>Price:</strong> ${pc.price}</p>
            <button onClick={() => loadPC(pc)} className="load-btn">Load PC</button>
          </div>
        ))}
      </div>

      {loading && <p>Loading...</p>}

      {selectedPC ? (
        <div className="selected-pc">
          <h3>Selected PC Configuration</h3>
          <p><strong>Name:</strong> {selectedPC.name}</p>
          <p><strong>CPU:</strong> {selectedPC.cpu}</p>
          <p><strong>GPU:</strong> {selectedPC.gpu}</p>
          <p><strong>RAM:</strong> {selectedPC.ram}</p>
          <p><strong>Storage:</strong> {selectedPC.storage}</p>
          <p><strong>Price:</strong> ${selectedPC.price}</p>
        </div>
      ) : (
        !loading && <p>Please select a PC to view its configuration.</p>
      )}
    </div>
  );
}

PreBuiltPC.propTypes = {
  preBuiltPCs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cpu: PropTypes.string.isRequired,
      gpu: PropTypes.string.isRequired,
      ram: PropTypes.string.isRequired,
      storage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export default PreBuiltPC;
