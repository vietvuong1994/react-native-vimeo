/**
 * @providesModule Vimeo
 * @flow
 */

'use strict';

import React from 'react-native';
const {
  View,
  StyleSheet,
  requireNativeComponent,
  NativeModules,
  NativeMethodsMixin,
  PropTypes
} = React;

export default class Vimeo extends React.Component {

  static propTypes = {

  }

  render() {
    return <RCTVimeo />;
  }
  
};

const RCTVimeo = requireNativeComponent('RCTVimeo', null);

const styles = StyleSheet.create({});
