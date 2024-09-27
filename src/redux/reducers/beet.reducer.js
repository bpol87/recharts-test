const beets = (state = [], action) => {
  switch (action.type) {
    case "SET_BEETS":
      return action.payload;
    default:
      return state;
  }
};

export default beets;