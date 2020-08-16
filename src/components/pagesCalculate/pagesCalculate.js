export const totalCharacterCards = getState => getState().char.length;

export const cardsPerPage = 8;
export const totalCharactersPages =getState=>
Math.floor(getState().char.length / 8);
 
