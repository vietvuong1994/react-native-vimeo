/**
 * @providesModule Vimeo
 * @flow
 */
import React from 'react-native';
const {
  View,
  StyleSheet,
  PropTypes,
  WebView
} = React;

export default class Vimeo extends React.Component {

  static propTypes = {
    videoId: PropTypes.string.isRequired
  }

  getHTMLString() {
    let html = `<iframe
      src="https://player.vimeo.com/video/${this.props.videoId}"
      width="100%"
      height="98%"
      frameborder="0"
      webkitallowfullscreen
      allowfullscreen></iframe>`;
    return html;
  }

  render() {
    return (
      <WebView
        style={{
          margin: -3,
          height: this.props.height
        }}
        html={this.getHTMLString()}
        scalesPageToFit={true}
        scrollEnabled={false}
      />
    );
  }

}
