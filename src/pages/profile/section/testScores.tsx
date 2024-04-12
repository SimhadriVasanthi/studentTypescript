import React, { useState } from 'react';
import { testScores } from '../../../assets/menu';

// Assuming you have a function component
const TestScoreForm: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string>('');
  
  // Define a function to handle test selection
  const handleTestSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTest(event.target.value);
  };
  
  // Define a function to map scores to text fields
  const mapScoresToTextFields = () => {
    const selectedTestScores = testScores.find(test => test.name === selectedTest)?.scores[0];
    if (!selectedTestScores) return null;
    
    return selectedTestScores.map((score, index) => (
      <div key={index}>
        <label>{score.description}</label>
        <input type="text" value=""   readOnly />
      </div>
    ));
  };
  
  return (
    <div>
      <select value={selectedTest} onChange={handleTestSelection}>
        <option value="">Select a test</option>
        {testScores.map(test => (
          <option key={test.name} value={test.name}>{test.name}</option>
        ))}
      </select>
      {selectedTest && (
        <div>
          <h3>{selectedTest} Scores</h3>
          {mapScoresToTextFields()}
        </div>
      )}
    </div>
  );
};

export default TestScoreForm;
