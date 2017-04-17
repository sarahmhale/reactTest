import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Style from './styles';

class ViewOneLedamot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: this.props.info
        }
    }

    render() {

        return (
            <View style={Style.container}>
                <Text style={Style.text}>{this.state.info.tilltalsnamn} {"\n"}
                    {this.state.info.efternamn}</Text>

            </View>
        )
    }
}
module.exports = ViewOneLedamot;
