import React, { useState } from 'react';


interface Word {
  id: number;
  text: string;
  translation: string;
}

const Game: React.FC = () => {
  const [words, setWords] = useState<Word[]>([
    { id: 1, text: 'Apple', translation: 'Pomme' },
    { id: 2, text: 'Banana', translation: 'Banane' },
    { id: 3, text: 'Orange', translation: 'Orange' },
  ]);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, wordId: number) => {
    event.dataTransfer.setData('text/plain', wordId.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, targetId: number) => {
    const sourceId = parseInt(event.dataTransfer.getData('text/plain'));

    if (sourceId !== targetId) {
      const sourceIndex = words.findIndex((word) => word.id === sourceId);
      const targetIndex = words.findIndex((word) => word.id === targetId);

      const updatedWords = [...words];
      const [removedWord] = updatedWords.splice(sourceIndex, 1);
      updatedWords.splice(targetIndex, 0, removedWord);

      setWords(updatedWords);
    }
  };

  return (
    <div className="game-container">
      <h1>Drag and Drop Game</h1>
      <div className="word-list">
        {words.map((word) => (
          <div
            key={word.id}
            className="word"
            draggable
            onDragStart={(event) => handleDragStart(event, word.id)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, word.id)}
          >
            {word.text}
          </div>
        ))}
      </div>
      <div className="translation-list">
        {words.map((word) => (
          <div key={word.id} className="translation">
            {word.translation}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
