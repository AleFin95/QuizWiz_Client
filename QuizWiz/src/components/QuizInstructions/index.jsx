import React from 'react';

const QuizInstructions = ({ onClose }) => {
  return (
    <div className="quiz-instructions">
      <h2>Quiz Instructions</h2>
      <p>Insert your quiz instructions here.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default QuizInstructions;

