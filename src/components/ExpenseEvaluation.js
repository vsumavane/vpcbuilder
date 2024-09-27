import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ExpenseEvaluation({ selectedParts }) {
  const [partDetails, setPartDetails] = useState({
    cpu: { price: 0, link: '' },
    motherboard: { price: 0, link: '' },
    gpu: { price: 0, link: '' },
    ram: { price: 0, link: '' },
    storage: { price: 0, link: '' },
    pcie: { price: 0, link: '' },
    cooling: { price: 0, link: '' },
    powerSupply: { price: 0, link: '' },
    cabinet: { price: 0, link: '' },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const partPricing = {
    'Intel Core i9': { price: 500, link: 'https://example.com/cpu-intel-core-i9' },
    'AMD Ryzen 9': { price: 450, link: 'https://example.com/cpu-amd-ryzen-9' },
    'MSI B550': { price: 150, link: 'https://example.com/msi-b550-motherboard' },
    'Nvidia RTX 3080': { price: 700, link: 'https://example.com/gpu-rtx-3080' },
    'Corsair Vengeance 16GB': { price: 100, link: 'https://example.com/ram-corsair-16gb' },
    'Samsung 970 EVO 1TB': { price: 150, link: 'https://example.com/ssd-samsung-970-evo' },
    'NZXT Kraken X63': { price: 200, link: 'https://example.com/cooling-nzxt-kraken' },
    'Corsair RM750x': { price: 120, link: 'https://example.com/psu-corsair-rm750x' },
    'NZXT H510': { price: 90, link: 'https://example.com/case-nzxt-h510' },
  };

  useEffect(() => {
    try {
      const newPartDetails = { ...partDetails };

      Object.keys(selectedParts).forEach(part => {
        const selectedPart = selectedParts[part];
        if (partPricing[selectedPart]) {
          newPartDetails[part] = partPricing[selectedPart];
        } else {
          throw new Error(`Pricing data for ${selectedPart} not found`);
        }
      });

      setPartDetails(newPartDetails);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [selectedParts]);

  const totalPrice = Object.values(partDetails).reduce(
    (total, part) => total + part.price,
    0
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="expense-evaluation container">
      <h2>Expense Evaluation and Best Buy Links</h2>

      <div className="quotation">
        <h3>Detailed Quotation</h3>
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Selected Part</th>
              <th>Price (USD)</th>
              <th>Best Buy Link</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selectedParts).map((part, index) => (
              selectedParts[part] && (
                <tr key={index}>
                  <td>{part}</td>
                  <td>{selectedParts[part]}</td>
                  <td>${partDetails[part].price}</td>
                  <td>
                    <a href={partDetails[part].link} target="_blank" rel="noopener noreferrer">
                      Best Buy Link
                    </a>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>

        <div className="total-price">
          <h4>Total Cost: ${totalPrice}</h4>
        </div>
      </div>
    </div>
  );
}

ExpenseEvaluation.propTypes = {
  selectedParts: PropTypes.object.isRequired,
};

export default ExpenseEvaluation;
