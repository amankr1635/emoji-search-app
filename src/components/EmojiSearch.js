import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import './EmojiSearch.css';

function EmojiPicker() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const handleEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div>
      <h2>EmojiSearch</h2>
    <div className='body'>
      {chosenEmoji && (
        <div > {chosenEmoji.emoji} </div>
        )}
      <Picker onEmojiClick={handleEmojiClick} />
    </div>
        </div>
  );
}

export default EmojiPicker;
