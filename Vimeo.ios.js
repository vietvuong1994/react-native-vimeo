/**
 * @providesModule Vimeo
 * @flow
 */
import React from 'react-native';
const {
  View,
  StyleSheet,
  requireNativeComponent,
  NativeModules,
  NativeMethodsMixin,
  PropTypes,
  WebView
} = React;

export default class Vimeo extends React.Component {

  static propTypes = {
    videoId: PropTypes.string.isRequired
  }

  getIFrameString() {
    let iFrame = `<iframe
      src="https://player.vimeo.com/video/${this.props.videoId}"
      width="100%"
      height="98%"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen></iframe>`;
    return iFrame;
  }

  render() {
    let HTML = this.getIFrameString();
    return (
      <WebView
        style={{
          margin: -3,
          height: this.props.height
        }}
        html={HTML}
        scalesPageToFit={true}
        scrollEnabled={false}
      />
    );
  }

}
