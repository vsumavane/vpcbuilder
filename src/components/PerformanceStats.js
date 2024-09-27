import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

function PerformanceStats({ selectedParts }) {
  const [performanceData, setPerformanceData] = useState({
    compatibleSoftware: [],
    compatibleGames: [],
    gamePerformance: [],
    recommendedConfig: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const performanceDatabase = useMemo(() => ({
    'Intel Core i9': {
      compatibleSoftware: ['Adobe Premiere Pro', 'AutoCAD', 'Blender'],
      compatibleGames: ['Cyberpunk 2077', 'Fortnite', 'Call of Duty: Warzone'],
      gamePerformance: {
        'Cyberpunk 2077': '60 FPS on Ultra Settings',
        'Fortnite': '144 FPS on High Settings',
        'Call of Duty: Warzone': '120 FPS on High Settings',
      },
      recommendedConfig: {
        gpu: 'Nvidia RTX 3080',
        ram: '16GB DDR4',
        storage: '1TB SSD',
      },
    },
    'AMD Ryzen 9': {
      compatibleSoftware: ['Maya', 'Photoshop', 'SolidWorks'],
      compatibleGames: ['Red Dead Redemption 2', 'League of Legends', 'Overwatch'],
      gamePerformance: {
        'Red Dead Redemption 2': '55 FPS on Ultra Settings',
        'League of Legends': '200 FPS on High Settings',
        'Overwatch': '150 FPS on High Settings',
      },
      recommendedConfig: {
        gpu: 'Nvidia RTX 3070',
        ram: '32GB DDR4',
        storage: '2TB SSD',
      },
    },
  }), []);

  useEffect(() => {
    const selectedCpu = selectedParts.cpu;
    if (performanceDatabase[selectedCpu]) {
      setPerformanceData(performanceDatabase[selectedCpu]);
      setError(null);
    } else {
      setError('Selected CPU not found in the performance database.');
      setPerformanceData({
        compatibleSoftware: [],
        compatibleGames: [],
        gamePerformance: [],
        recommendedConfig: {},
      });
    }
    setLoading(false);
  }, [selectedParts, performanceDatabase]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="performance-stats container">
      <h2>Performance Stats & Recommendations</h2>

      <div className="compatible-software">
        <h3>Compatible Software</h3>
        <ul>
          {performanceData.compatibleSoftware.map((software, index) => (
            <li key={index}>{software}</li>
          ))}
        </ul>
      </div>

      <div className="compatible-games">
        <h3>Compatible Games</h3>
        <ul>
          {performanceData.compatibleGames.map((game, index) => (
            <li key={index}>{game}</li>
          ))}
        </ul>
      </div>

      <div className="game-performance">
        <h3>Game Performance</h3>
        <ul>
          {Object.keys(performanceData.gamePerformance).map((game, index) => (
            <li key={index}>
              {game}: {performanceData.gamePerformance[game]}
            </li>
          ))}
        </ul>
      </div>

      <div className="recommended-config">
        <h3>Recommended Configuration</h3>
        <ul>
          <li>GPU: {performanceData.recommendedConfig.gpu}</li>
          <li>RAM: {performanceData.recommendedConfig.ram}</li>
          <li>Storage: {performanceData.recommendedConfig.storage}</li>
        </ul>
      </div>
    </div>
  );
}

PerformanceStats.propTypes = {
  selectedParts: PropTypes.shape({
    cpu: PropTypes.string.isRequired,
  }).isRequired,
};

export default PerformanceStats;
