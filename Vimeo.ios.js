/**
 * @providesModule Vimeo
 * @flow
 */
import React from 'react-native';
const {
  StyleSheet,
  PropTypes
} = React;
import WebViewBridge from 'react-native-webview-bridge';

import {getPlayerHTML, injectScript} from './webview-content';


// TODO - Will have to use this https://github.com/alinz/react-native-webview-bridge
export default class Vimeo extends React.Component {

  static propTypes = {
    videoId: PropTypes.string.isRequired
  }

  componentDidMount() {
    setTimeout(() => {
      this.refs.webviewBridge.sendToBridge('Hi there!');
    }, 500);
  }

  getHTMLString() {
    return getPlayerHTML(this.props.videoId);
  }

  onBridgeMessage = (message) => {
    console.log("Received message from webview:", message);
  }

  render() {
    return (
      <WebViewBridge
        ref='webviewBridge'
        style={{
          margin: -3,
          height: this.props.height
        }}
        source={{uri: 'http://localhost:5000/page.html'}}
        scalesPageToFit={true}
        scrollEnabled={false}
        onBridgeMessage={this.onBridgeMessage}
        onError={(error)=>{console.log(error)}}
      />
    );
  }

}
