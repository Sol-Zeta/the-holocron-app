import { Character } from '@/types/index';

export const filterItems = (filterTerm: string, characters: Character[]) => {
  if (!characters) return [];
  if (!filterTerm) return characters;
  const filteredItems: Character[] = [];
  for (let i = 0; i < characters.length; i++) {
    const characterData = Object.values(characters[i])
      .filter((item) => typeof item === 'string')
      .map((item) => item.toLowerCase())
      .join(' ');
    if (characterData.includes(filterTerm.toLowerCase())) {
      filteredItems.push(characters[i]);
    }
  }
  return filteredItems;
};
