import React from "react";

import { connect } from "react-redux";
import { Advertisement, Embed } from "semantic-ui-react";

const VideoPlayer = props => (
  <div className="video-player">
    {!props.video.id && (
      <Advertisement
        test="Escolha um vídeo"
        unit="top banner"
        style={{ width: "100%", height: "100%" }}
      />
    )}
    {props.video.id && (
      <div>
        <Embed
          id={props.video.id.videoId}
          autoplay={true}
          color="white"
          source="youtube"
        />
        <h1>{props.video.snippet.title}</h1>
        <p>{props.video.snippet.description}</p>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  video: state.playVideo.video
});

export default connect(
  mapStateToProps,
  null
)(VideoPlayer);
