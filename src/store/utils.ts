// // setFilteredCharacters: (state, action) => {
// //     return {
// //       ...state,
// //       filteredCharacters: filterItems(action.payload, state.charactersPages),
// //     };
// //   },

// const filterItems = (filterTerm: string, items: CharacterPages) => {
//   const filteredItems: CharacterPages = {};
//   for (const key in items) {
//     if (Object.prototype.hasOwnProperty.call(items, key)) {
//       const content = Object.values(items[key].join(' '));
//       if (content.includes(filterTerm)) {
//         filteredItems[key] = items[key];
//       }
//     }
//   }
//   return filteredItems;
// };
