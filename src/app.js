import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import api from './api';
import Style from './styles';

import {
    Provider
} from 'react-redux';
import {
    createStore,
    applyMiddleware,
    combineReduxers,
    compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

var ListLedamot = require('./ListLedamot');
var ViewOneLedamot = require('./ViewOneLedamot');

export default class test extends Component {

    render() {
            return ( < Navigator initialRoute = {
                    {
                        id: 'ListLedamot'
                    }
                }
                renderScene = {
                    this.navigatorRenderScene.bind(this)
                }
                />);
            }

            navigatorRenderScene(route, navigator) {

                    if (route.id === 'ListLedamot') {
                        console.log("in here");
                        return ( < ListLedamot navigator = {
                                navigator
                            }
                            />);

                        }
                        if (route.id === 'ViewOneLedamot') {
                            return ( < ViewOneLedamot navigator = {
                                    navigator
                                } { ...route.passProps
                                }
                                />)

                            }

                        }
                    }
                    AppRegistry.registerComponent('test', () => test);
