import youtubeSearch from "youtube-api-v3-search";
import apiKey from "../../services/api";

export const searchVideoRequest = () => {
  return {
    type: "SEARCH_VIDEO_REQUEST",
    loading: true,
    error: false
  };
};

export const searchVideoSuccess = videos => {
  return {
    type: "SEARCH_VIDEO_SUCCESS",
    videos,
    loading: false,
    error: false
  };
};

export const searchVideoError = () => {
  return {
    type: "SEARCH_VIDEO_ERROR",
    loading: false,
    error: true
  };
};

export const searchVideo = term => {
  return dispatch => {
    dispatch(searchVideoRequest());
    youtubeSearch(apiKey, { q: term })
      .then(data => dispatch(searchVideoSuccess(data.items)))
      .catch(() => dispatch(searchVideoError()));
  };
};
