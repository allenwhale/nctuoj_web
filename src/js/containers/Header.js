import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as SessionActions from './../actions/Session';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Nav,
    Navbar,
    NavItem,
} from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.deleteSession = this.deleteSession.bind(this);
    }
    deleteSession(){
        this.props.dispatch(SessionActions.deleteSession());
    }
    render(){
        return (
            <Navbar>
                <Navbar.Header>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <a href="#">
                                NCTUOJ
                            </a>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem onClick={this.deleteSession}>Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
function mapStateToProps(state){
    return {
        session: state.session,
    };
}
export default connect(mapStateToProps)(Header);
