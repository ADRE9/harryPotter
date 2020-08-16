export default (state = 1, action) => {
  switch (action.type) {
    case "FETCH_ACTIVE_PAGE":
      return action.payload;
    default:
      return state;
  };
};