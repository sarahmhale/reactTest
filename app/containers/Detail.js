import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux'
import {
  ActionCreators
} from '../actions';


class Detail extends Component {

  ledamoter() {
    return this.props.searchedLedamoter[this.props.navigationParams.id] || null
  }
  render() {
    const ledamoter = this.ledamoter()
    if(!ledamoter){return null}
    return (<View style={{marginTop:20}}>
      <Text>{ledamoter.efternamn}</Text>
      </View>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationParams: state.navigationParams,
    searchedLedamoter: state.searchedLedamoter
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
