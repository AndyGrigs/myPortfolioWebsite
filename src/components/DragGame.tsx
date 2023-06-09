import React, { useState } from 'react';

interface Word {
  id: number;
  text: string;
  translation: string;
  matched: boolean;
}

const words: Word[] = [
  { id: 1, text: 'Hello', translation: 'Привіт', matched: false },
  { id: 2, text: 'Goodbye', translation: 'До побачення', matched: false },
  { id: 3, text: 'Thank you', translation: 'Дякую', matched: false },
  // Add more words as needed
];

const DragGame: React.FC = () => {
  const [remainingWords, setRemainingWords] = useState(words);
  const [score, setScore] = useState(0);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, wordId: number, text: string) => {
    event.preventDefault();
  
    const updatedWords = remainingWords.map((word) => {
      console.log(word.id)
      if (word.id === wordId && word.text === text) {
        return {
          ...word,
          matched: true,
        };
      }
      return word;
    });
  
    setRemainingWords(updatedWords);
    setScore(score + 1);
  };
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, wordId: number) => {
    event.dataTransfer.setData('text/plain', wordId.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const remainingTranslations = remainingWords.filter(
    (word) => !word.matched && word.translation !== ''
  );

  return (
    <div className="app">
      <div className="score">Score: {score}</div>
      <div className="word-container">
        {remainingWords.map((word) => (
          <div
            key={word.id}
            className="word"
            draggable={!word.matched}
            onDragStart={(event) => handleDragStart(event, word.id)}
          >
            {word.text}
          </div>
        ))}
      </div>
      <div className="translation-container" onDragOver={handleDragOver}>
        {remainingTranslations.map((word) => (
          <div
            key={word.id}
            className="translation"
            onDrop={(event) => handleDrop(event, word.id, word.text)}
            onDragOver={handleDragOver}
          >
            {word.translation}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragGame;
