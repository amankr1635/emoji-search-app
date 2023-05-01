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

const EmojiSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState(emojis);

  const handleSearchInputChange = (event) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);

    const filtered = emojis.filter(({ name }) => {
      const lowerCaseName = name.toLowerCase();
      const lowerCaseSearchText = newSearchText.toLowerCase();
      return lowerCaseName.includes(lowerCaseSearchText);
    });

    setFilteredEmojis(filtered);
  };

  return (
    <div className="emoji-search">
      <h1 className="emoji-search__title">Emoji Search</h1>
      <input className="emoji-search__input" type="text"  placeholder="Search for an emoji..." value={searchText} onChange={handleSearchInputChange} />
      <ul className="emoji-search__list">
        {filteredEmojis.map(({ id, emoji, name }) => (
          <li key={id} className="emoji-search__item">
            <span className="emoji-search__emoji">{emoji}</span>
            <span className="emoji-search__name">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmojiSearch;