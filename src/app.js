import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Button} from 'react-native';
import api from './src/api';

export default class test extends Component {
    constructor(props) {
      super(props);
        this.state = {
            termlista: []
        }
    }
    componentWillMount() {
        api.getLedamoter().then((res) => {
            this.setState({
              termlista: res.termlista
            })
        });
    }
    _onPressButton() {
        let views = "You pressed med"
        return views;
    }
    render() {
      console.log("Ledamoter: ", this.state.ledamoter);
        return (
           <Button onPress = {this._onPressButton}
        title = "Press me" />);
    }
}
AppRegistry.registerComponent('test', () => test);
