import {View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class ApplicationTabs extends Component{
  render(){
    return<View />
  }
}

function mapStateToProps(state){
  return{

  }
}
export default connect(mapStateToProps)(ApplicationTabs);
