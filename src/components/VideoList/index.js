import React from "react";

import { List, Image, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { playVideo } from "../../store/actions/playVideo";

const VideoList = props => (
  <div className="video-list">
    {props.loading && (
      <Dimmer active>
        <Loader size="medium">Carregando...</Loader>
      </Dimmer>
    )}

    <List verticalAlign="middle">
      {props.videos.map(video => (
        <List.Item
          key={video.id.videoId}
          onClick={() => {
            props.play(video);
          }}
        >
          <Image src={video.snippet.thumbnails.medium.url} />
          <List.Content>
            <List.Header>{video.snippet.title}</List.Header>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </div>
);

const mapStateToProps = state => ({
  videos: state.search.videos,
  loading: state.search.loading,
  error: state.search.error
});

const mapDispatchToProps = dispatch => ({
  play: video => dispatch(playVideo(video))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);
