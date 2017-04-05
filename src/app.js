import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator} from 'react-native';
import api from './api';
import Style from './styles';
var ListLedamot = require('./ListLedamot');
var ViewOneLedamot = require('./ViewOneLedamot');
export default class test extends Component {

    render() {
        return (<Navigator initialRoute={{
            id:'ListLedamot'
        }} renderScene={this.navigatorRenderScene.bind(this)}/>);
    }

    navigatorRenderScene(route, navigator) {
console.log("id:", route.id)
      if(route.id==='ListLedamot'){
          console.log("in here");
        return(<ListLedamot navigator={navigator} />);

      }
      if(route.id==='ViewOneLedamot'){
        console.log("hejhejehöjheöji;: ",route.info)
        return(<ViewOneLedamot navigator={navigator} {...route.passProps}/>)

      }
      /**  _navigator = navigator;
        switch (route.id) {
            case 'ListLedamot':
                return (
                    <ListLedamot></ListLedamot>
                );
            case 'ViewOneLedamot':
                return (<ViewOneLedamot/>);

        }
*/
    }
}
AppRegistry.registerComponent('test', () => test);
