const INITIAL_STATE = {
  video: {}
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === "PLAY_VIDEO") return { video: action.video };

  return state;
};

export default reducer;
