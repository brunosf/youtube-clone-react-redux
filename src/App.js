import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </div>
    </Provider>
  );
}

export default App;
