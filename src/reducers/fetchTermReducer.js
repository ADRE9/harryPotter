export default (state = '', action) => {
  switch (action.type) {
    case 'FETCH_TERM':
      return action.payload;
    default:
      return state;
  };
};