import React, { Component } from "react";

import { Segment, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { searchVideo } from "../../store/actions/searchVideo";

class SearchBar extends Component {
  searchTerm = e => {
    if (e.keyCode === 13) {
      const term = e.target.value;
      this.props.searchVideo(term);
    }
  };

  render() {
    return (
      <div className="search-bar">
        <Segment stacked>
          <Input
            icon="search"
            size="large"
            placeholder="Pesquisar..."
            onKeyDown={e => this.searchTerm(e)}
          />
        </Segment>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchVideo: term => dispatch(searchVideo(term))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
