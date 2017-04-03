import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import api from './api';
import Style from './styles'

export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            termlista: null,
            kvinna: null,
            man: null

        }
    }
    componentWillMount() {
        api().then((res) => {
            this.setState({termlista: res.termlista})
            if (this.state.termlista != null) {
                for (i = 0; i < this.state.termlista.term.length; i++) {
                    if (this.state.termlista.term[i].namn === 'kvinna') {
                        this.setState({kvinna: this.state.termlista.term[i].antal});
                    } else {
                        this.setState({man: this.state.termlista.term[i].antal});
                    }
                }

            }
        });

    }
    _onPressButton() {
        let views = "You pressed med"
        return views;
    }
    render() {

        return (
            <View>
              <Text style={Style.title}>I sveriges riksdag är det:</Text>
                <Text style={Style.kvinnor}>Kvinnor: {this.state.kvinna}</Text>
                <Text style={Style.man}>Män: {this.state.man}</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent('test', () => test);
