import React, { useState } from 'react';
import "./App.css";
import questions from './questions';

const FlashcardApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);



  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    const nextIndex = currentIndex + 1;
    console.log("🚀 ~ file: App.js:17 ~ handleNextCard ~ nextIndex:", nextIndex)
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setIsFlipped(false);
    } else {
      alert('Has llegado al final de las tarjetas.');
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="flashcard-app">
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="front">
          <h2>Pregunta:</h2>
          <p>{currentQuestion.question}</p>
          <h2>Opciones:</h2>
          <ul>
            {currentQuestion.options?.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
        <div className="back">
          <h2>Respuesta:</h2>
          <p>{currentQuestion.correctAnswer}</p>
        </div>
      </div>
      <button onClick={handleNextCard}>Siguiente</button>
      <p>Current Index: {currentIndex}</p>
    </div>
  );
};

export default FlashcardApp;

