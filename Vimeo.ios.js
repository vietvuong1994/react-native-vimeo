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
    videoId: PropTypes.string.isRequired,
    onReady: PropTypes.func,
    onPlay: PropTypes.func,
    onPlayProgress: PropTypes.func,
    onPause: PropTypes.func
  }

  constructor() {
    super();
    this.handlers = {};
    this.state = {
      ready: false
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.refs.webviewBridge.sendToBridge('Hi there!');
    // }, 500);
  }

  // api(method, cb) {
  //   if (!this.state.ready) {
  //     throw new Error('You cannot use the `api` method until `onReady` has been called');
  //   }
  // }

  registerHandlers() {
    this.registerBridgeEventHandler('ready', this.onReady);
    this.registerBridgeEventHandler('play', this.props.onPlay);
    this.registerBridgeEventHandler('playProgress', this.props.onPlayProgress);
    this.registerBridgeEventHandler('pause', this.props.onPause);
  }

  onReady() {
    this.setState({ready: true});
    if (this.props.onReady) this.props.onReady();
  }

  registerBridgeEventHandler(eventName, handler) {
    this.handlers[eventName] = handler;
  }

  onBridgeMessage = (message) => {
    let payload = JSON.parse(message);
    let handler = this.handlers[payload.name];
    if (handler) handler(payload.data);
  }

  render() {
    return (
      <WebViewBridge
        ref='webviewBridge'
        style={{
          margin: -3,
          height: this.props.height
        }}
        source={{uri: 'http://localhost:5000/?vid=' + this.props.videoId}}
        scalesPageToFit={true}
        scrollEnabled={false}
        onBridgeMessage={this.onBridgeMessage}
        onError={(error)=> console.error(error)}
      />
    );
  }

}
