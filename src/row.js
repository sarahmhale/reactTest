import React, { Component } from 'react'
import {
   View,
   ListView,
   Text
} from 'react-native'
import Style from './styles';

const Row = (props) => {
   return (
      <View style={Style.container}>
        <Text>{`${props.name}`}</Text>
      </View>
   )
}
export default Row;
