import React, { Component } from 'react';
import {
  ScrollView,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Text,
  Button
} from 'react-native';
import Style from '../lib/styles'

import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false
    }
  }
  searchedLedamoter() {

    this.setState({ fetching: true });
    this.props.fetchedLedamoter().then(() => {
      this.setState({ fetching: false })
    });

  }

  ledamoter() {
    return Object.keys(this.props.searchedLedamoter).map(key => this.props.searchedLedamoter[key])
  }
  render() {

    return <View>
      <View>
        <Button title="Fetch Ledamöter" onPress={() => this.searchedLedamoter()}></Button>
      </View>
      <ScrollView>
        {this.ledamoter().map((ledamoter) => {
          return <TouchableHighlight key={ledamoter.hangar_id}
            onPress={()=>  this.props.navigate({key:'Detail', id:ledamoter.hangar_id})}>
              <View style={Style.container}>
                <Image source={{  uri: ledamoter.bild_url_80  }} style={Style.photo}/>
                <Text style={Style.text} numberOfLines={1}>{ledamoter.tilltalsnamn} {ledamoter.efternamn}</Text>
              </View>
            </TouchableHighlight>})
        }
        {this.state.fetching ? <Text style={Style.text}>Fetching...</Text> : null}
      </ScrollView>
    </View>


  }

}
//what it is listening for
function mapStateToProps(state) {
  return { searchedLedamoter: state.searchedLedamoter };
}
export default connect(mapStateToProps)(Home);
