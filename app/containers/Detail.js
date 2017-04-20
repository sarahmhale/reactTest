import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
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
    return (
      <View style={{marginTop:20}}>
        <Button title="Back" onPress={()=>this.props.navigationBack()}/>
        <Text>{ledamoter.efternamn}</Text>
      </View>
      );
  }
}
//Connect actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

//Connects the state (the redux store)
function mapStateToProps(state) {
  return {
    navigationParams: state.navigationParams,
    searchedLedamoter: state.searchedLedamoter
  };
}

//Here is thne connecteing made..
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
