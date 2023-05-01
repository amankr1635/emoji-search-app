import React, { useState } from 'react';
import './EmojiSearch.css'

const emojis = [
  { name: 'grinning face', emoji: '😀' },
  { name: 'grinning face with big eyes', emoji: '😃' },
  { name: 'grinning face with smiling eyes', emoji: '😁' },
  { name: 'beaming face with smiling eyes', emoji: '😊' },
  { name: 'grinning squinting face', emoji: '😆' },
  { name: 'grinning face with sweat', emoji: '😅' },
  { name: 'rolling on the floor laughing', emoji: '🤣' },
  { name: 'face with tears of joy', emoji: '😂' },
  { name: 'slightly smiling face', emoji: '🙂' },
  { name: 'upside-down face', emoji: '🙃' },
  { name: 'winking face', emoji: '😉' },
  { name: 'smiling face with smiling eyes', emoji: '😊' },
  { name: 'smiling face with halo', emoji: '😇' },
  { name: 'smiling face with hearts', emoji: '🥰' },
  { name: 'smiling face with heart-eyes', emoji: '😍' },
  { name: 'face blowing a kiss', emoji: '😘' },
  { name: 'kissing face', emoji: '😗' },
  { name: 'smiling face', emoji: '☺️' },
  { name: 'smiling face with sunglasses', emoji: '😎' },
  { name: 'smiling face with mask', emoji: '😷' },
  { name:  'number 100',emoji:'💯'},
  { name: '1234',emoji: '🔢'},
  { name:'red heart',emoji:'💘'},
];

function EmojiSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmojis = emojis.filter(
    (emoji) =>
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.emoji.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Emjoi Search</h2>
      <input
        type="text"
        placeholder="Search for an emoji..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className='emojis'>
        {filteredEmojis.map((emoji, index) => (
          <span key={index} style={{ fontSize: '2rem', margin: '0.5rem' }}>
            {emoji.emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

export default EmojiSearch;