import React, {
    Component
} from 'react';
import Home from './Home'
//import ApplicationTabs from './ApplicationTabs'
import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux'
import {
    ActionCreators
} from '../actions';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ledarmotCount: 0
        }
    }
    addLedamot() {
        this.props.addLedamot();
    }

    render() {
      //return <ApplicationTabs {...this.props}/>
      return <Home { ...this.props}/>
    }
}

function mapDispatchToProps(dispatch) {
    //smart componets (all of the action creaters in applikation )
    return bindActionCreators(ActionCreators, dispatch);
}
//state=the global state of the application
export default connect((state) => {return{}}, mapDispatchToProps)(AppContainer);
