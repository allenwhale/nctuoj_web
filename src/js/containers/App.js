import React, { Component } from 'react';
import { connect } from 'react-redux';
import DevTools from './DevTools';
import LoginRegister from './LoginRegister';
import Header from './Header';
import * as SessionActions from './../actions/Session';
import {
    Grid,
} from 'react-bootstrap';
require('sweetalert/dist/sweetalert.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
require('./../../assets/styles/core.sass');

class App extends Component {
    constructor(props) {
        super(props);
        this.getSession = this.getSession.bind(this);
    }

    componentWillMount(){
        this.getSession();
    }
    
    getSession(){
        this.props.dispatch(SessionActions.setSessionByLocalStorage());
    }

    shouldComponentUpdate(nextProps) {
        if( Object.keys(nextProps.session).length != 
            Object.keys(this.props.session).length){
            return true;
        } else {
            return false;
        }
    }

    render() {
        var showLoginPage = 
            Object.keys(this.props.session).length == 0 &&
            this.props.routing.location.pathname == '/';
        var content;
        if(showLoginPage){
            content = <LoginRegister />
        } else {
            content = 
                <div>
                    <Header />
                    <Grid>
                        {this.props.children}
                    </Grid>
                </div>
        }
        return (
            <div id="app">
            { 
                content
            }
            {
                process.env.NODE_ENV !== 'production' ?
                    <DevTools /> :
                    ""
            }
            </div>
       );
    }
}

function mapStateToProps(state) {
    return {
        session: state.session,
        routing: state.routing,
    };
}

export default connect(mapStateToProps)(App);
