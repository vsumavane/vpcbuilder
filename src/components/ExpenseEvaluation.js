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

  const conversionRate = 75; // Example conversion rate from USD to INR

  useEffect(() => {
    const partPricing = {
      'Intel Core i9': { price: 500, link: 'https://example.com/cpu-intel-core-i9' },
      'AMD Ryzen 9': { price: 450, link: 'https://example.com/cpu-amd-ryzen-9' },
      'Intel Core i7': { price: 350, link: 'https://example.com/cpu-intel-core-i7' },
      'AMD Ryzen 7': { price: 300, link: 'https://example.com/cpu-amd-ryzen-7' },
      'MSI B550': { price: 150, link: 'https://example.com/msi-b550-motherboard' },
      'Asus ROG Strix B550': { price: 200, link: 'https://example.com/asus-rog-strix-b550' },
      'Gigabyte Z490': { price: 250, link: 'https://example.com/gigabyte-z490' },
      'Asrock X570': { price: 220, link: 'https://example.com/asrock-x570' },
      'Nvidia RTX 3080': { price: 700, link: 'https://example.com/gpu-rtx-3080' },
      'AMD Radeon RX 6900 XT': { price: 1000, link: 'https://example.com/gpu-rx-6900-xt' },
      'Nvidia RTX 3070': { price: 500, link: 'https://example.com/gpu-rtx-3070' },
      'AMD Radeon RX 6800': { price: 600, link: 'https://example.com/gpu-rx-6800' },
      'Corsair Vengeance 16GB': { price: 100, link: 'https://example.com/ram-corsair-16gb' },
      'G.Skill Ripjaws 32GB': { price: 150, link: 'https://example.com/ram-gskill-32gb' },
      'Kingston HyperX 16GB': { price: 90, link: 'https://example.com/ram-kingston-16gb' },
      'Crucial Ballistix 32GB': { price: 160, link: 'https://example.com/ram-crucial-32gb' },
      'Samsung 970 EVO 1TB': { price: 150, link: 'https://example.com/ssd-samsung-970-evo' },
      'WD Black SN750 1TB': { price: 140, link: 'https://example.com/ssd-wd-black-sn750' },
      'Seagate Barracuda 2TB': { price: 80, link: 'https://example.com/hdd-seagate-barracuda' },
      'Crucial MX500 1TB': { price: 120, link: 'https://example.com/ssd-crucial-mx500' },
      'WiFi 6 Card': { price: 50, link: 'https://example.com/pcie-wifi6' },
      'Sound Card': { price: 70, link: 'https://example.com/pcie-sound-card' },
      'Capture Card': { price: 150, link: 'https://example.com/pcie-capture-card' },
      'NZXT Kraken X63': { price: 200, link: 'https://example.com/cooling-nzxt-kraken' },
      'Corsair H100i': { price: 170, link: 'https://example.com/cooling-corsair-h100i' },
      'Noctua NH-D15': { price: 90, link: 'https://example.com/cooling-noctua-nh-d15' },
      'Corsair RM750x': { price: 120, link: 'https://example.com/psu-corsair-rm750x' },
      'EVGA 650 GQ': { price: 100, link: 'https://example.com/psu-evga-650-gq' },
      'Seasonic Focus Plus 850': { price: 140, link: 'https://example.com/psu-seasonic-focus-plus-850' },
      'NZXT H510': { price: 90, link: 'https://example.com/case-nzxt-h510' },
      'Corsair 4000D': { price: 100, link: 'https://example.com/case-corsair-4000d' },
      'Lian Li PC-O11': { price: 130, link: 'https://example.com/case-lian-li-pc-o11' },
    };
  
    try {
      const newPartDetails = { ...partDetails };
  
      Object.keys(selectedParts).forEach(part => {
        const selectedPart = selectedParts[part];
        if (selectedPart && partPricing[selectedPart]) {
          newPartDetails[part] = partPricing[selectedPart];
        } else if (selectedPart) {
          throw new Error(`Pricing data for ${selectedPart} not found`);
        }
      });
  
      setPartDetails(newPartDetails);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [selectedParts, partDetails]);

  const totalPrice = Object.values(partDetails).reduce(
    (total, part) => total + part.price,
    0
  );

  const totalPriceInINR = totalPrice * conversionRate;

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
              <th>Price (INR)</th>
              <th>Best Buy Link</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selectedParts).map((part, index) => (
              selectedParts[part] && (
                <tr key={index}>
                  <td>{part}</td>
                  <td>{selectedParts[part]}</td>
                  <td>₹{(partDetails[part].price * conversionRate).toFixed(2)}</td>
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
          <h4>Total Cost: ₹{totalPriceInINR.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
}

ExpenseEvaluation.propTypes = {
  selectedParts: PropTypes.object.isRequired,
};

export default ExpenseEvaluation;
