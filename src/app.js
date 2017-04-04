import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import api from './api';
import Style from './styles';
var ListLedamot = require('./ListLedamot');
export default class test extends Component {
    /**constructor(props) {
        super(props);
        this.state = {
            personlista: [],
            person: null
        }
    }
    componentWillMount() {
        api().then((res) => {
            this.setState({personlista: res.personlista});
            this.setState({person: this.state.personlista.person })

        });

    }
*/
    render() {
      

        return (
            <ListLedamot></ListLedamot>

        );
    }
}
AppRegistry.registerComponent('test', () => test);
