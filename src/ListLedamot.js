import React, {Component} from 'react';
import {ListView, Text, View, TouchableHighlight, Image} from 'react-native';
import Style from './styles';
import Row from './row';
import api from './api';
var ledamotArray = [];
export default class ListLedamot extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(ledamotArray),
            isLoading: true

        };

    }

    componentWillMount() {
        api().then((res) => {
            ledamotArray = res.personlista.person;
            console.log("ledamotArray" + ledamotArray);
            this.setState({dataSource: this.state.dataSource.cloneWithRows(ledamotArray), isLoading: false})
        });

    }
    renderRow(rowData, sectionID, rowID) {
        return (

            <TouchableHighlight >
                <View style={Style.container}>
                    <Image source={{ uri: rowData.bild_url_80}} style={Style.photo} />
                    <Text style={Style.text} numberOfLines={1}>{rowData.tilltalsnamn} {rowData.efternamn}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {

        console.log(ledamotArray);
        return (
            <View>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} enableEmptySections={true}/>
            </View>
        );

    }
}
module.exports = ListLedamot;
