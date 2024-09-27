import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ stepNumber, title, children }) => (
  <div className="step">
    <h3>Step {stepNumber}: {title}</h3>
    <p>{children}</p>
  </div>
);

Step.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const HowToBuild = () => {
  const steps = [
    { title: 'Access the Build PC Section', content: 'From the home page, navigate to the Build PC section in the navigation bar. This will take you to the virtual PC building interface.' },
    { title: 'Select Your CPU', content: 'Begin by selecting a CPU from the available options. The CPU is the heart of your PC, and you can view detailed specifications for each model.' },
    { title: 'Choose a Motherboard', content: 'After selecting your CPU, choose a compatible motherboard. The app will automatically filter available motherboards based on your CPU choice.' },
    { title: 'Add a GPU (Optional)', content: 'If you plan to game or use graphics-intensive applications, select a GPU. You can skip this step if you\'re opting for integrated graphics.' },
    { title: 'Select RAM', content: 'Choose the amount of RAM you need. The app will show you the compatible options based on your selected motherboard.' },
    { title: 'Choose Storage Options', content: 'Select your storage type (SSD or HDD) and capacity. Consider your storage needs for the operating system and applications.' },
    { title: 'Add Additional Components (Optional)', content: 'You can also add extra components such as PCIe cards, additional cooling systems, or sound cards based on your requirements.' },
    { title: 'Select a Power Supply', content: 'Choose a power supply unit (PSU) that provides sufficient wattage for your selected components. The app may suggest options based on your build.' },
    { title: 'Choose a PC Case', content: 'Finally, select a PC case that fits all your components and suits your aesthetic preferences. Ensure it has good airflow and cable management options.' },
    { title: 'Review Your Build', content: 'Once you\'ve selected all components, review your build summary. Check compatibility alerts and performance recommendations provided by the app.' },
    { title: 'Save Your Configuration', content: 'If you\'re satisfied with your configuration, save it for future reference. You can also share it or load it later.' },
  ];

  const tips = [
    'Check compatibility between components regularly.',
    'Use the app\'s performance stats feature to gauge your build\'s capabilities.',
    'Don’t hesitate to explore multiple configurations before finalizing.',
    'Refer to online reviews and benchmarks for component choices.',
  ];

  return (
    <div className="how-to-build container">
      <h2>How to Build Your PC with VPCBuilder</h2>
      {steps.map((step, index) => (
        <Step key={index} stepNumber={index + 1} title={step.title}>
          {step.content}
        </Step>
      ))}
      <div className="tips">
        <h3>Tips for a Successful Build</h3>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowToBuild;
