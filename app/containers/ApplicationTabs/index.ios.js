import { View, TabBarIOS, TabBarItemIOS } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import Home from '../Home'
import About from '../About'

class ApplicationTabs extends Component {

  onPress(tabIndex) {
    this.props.setTab(tabIndex);
  }
  renderScene(component) {
    return(
    <View style={{flex: 1}}>
      {React.createElement(component, this.props)}
    </View>);
  }

  render() {

    return(
    <TabBarIOS style={{flex: 1,  marginTop: 20}}>
      <TabBarIOS.Item onPress={() => {
        return this.onPress(0);
      }} systemIcon="favorites" selected={this.props.tabs.index === 0} iconSize={25}>
        {this.renderScene(Home)}
      </TabBarIOS.Item>
      <TabBarIOS.Item onPress={() => {
        return this.onPress(1);
      }} systemIcon="more" selected={this.props.tabs.index === 1} iconSize={25}>
        {this.renderScene(About)}
      </TabBarIOS.Item>
    </TabBarIOS>);
  }
}

function mapStateToProps(state) {
  return { tabs: state.tabs }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs)
