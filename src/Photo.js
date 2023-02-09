import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img width="350" height="350" src={this.props.imageUrl} />
    )
  }
}

export { Photo };