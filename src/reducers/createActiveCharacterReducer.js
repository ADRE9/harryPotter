export default (state = 195, action) => {
  switch (action.type) {
    case "FETCH_ACTIVE_CHARACTER":
      return action.payload;
    default:
      return state;
  };
};