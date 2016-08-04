import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as SessionActions from './../actions/Session';
import * as LoginRegisterActions from './../actions/LoginRegister';
import {
    Form,
    FormGroup,
    FormControl,
    Col,
    ControlLabel,
    Grid,
    Row,
    Nav,
    NavItem,
    Button,
} from 'react-bootstrap';

class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.submitLogin = this.submitLogin.bind(this);
        this.submitRegister = this.submitRegister.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.selectItem = 1;
    }

    submitLogin(e){
        e.preventDefault();
        var data = new FormData(ReactDOM.findDOMNode(this.refs.form));
        this.props.dispatch(SessionActions.postSession(data));
    }

    submitRegister(e){
        e.preventDefault();
        var data = new FormData(ReactDOM.findDOMNode(this.refs.form));
    }

    handleSelect(selectedKey){
        this.props.dispatch(LoginRegisterActions.setLoginRegisterSelect(selectedKey));
    }

    render(){
        return (
            <Col 
                lgOffset={4} lg={4} 
                mdOffset={2} md={8} 
                smOffset={1} sm={10} 
                             xs={12}
                className="login">
                <Nav bsStyle="pills" justified activeKey={this.props.loginRegister} onSelect={this.handleSelect}>
                    <NavItem eventKey={0}>SignIn</NavItem>
                    <NavItem eventKey={1}>Register</NavItem>
                </Nav>
                { this.props.loginRegister == 0 ? 
                    <Form horizontal ref="form" onSubmit={this.submitLogin}>
                        <FormGroup>
                            <Col componentClass={ControlLabel} lg={4} md={4} sm={3}>Email</Col>
                            <Col lg={8} md={8} sm={9}>
                                <FormControl name="email" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} lg={4} md={4} sm={3}>Password</Col>
                            <Col lg={8} md={8} sm={9}>
                                <FormControl name="password" type="password" />
                            </Col>
                        </FormGroup>
                        <div>
                            <Button type="submit" bsStyle="default" right>SignIn</Button>
                        </div>
                    </Form> : 
                    <Form horizontal ref="form" onSubmit={this.submitRegister}>
                        <FormGroup>
                            <Col componentClass={ControlLabel} lg={4} md={4} sm={3}>Email</Col>
                            <Col lg={8} md={8} sm={9}>
                                <FormControl name="email" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} lg={4} md={4} sm={3}>Password</Col>
                            <Col lg={8} md={8} sm={9}>
                                <FormControl name="password" type="password" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} lg={4} md={4} sm={3}>Confirm Password</Col>
                            <Col lg={8} md={8} sm={9}>
                                <FormControl name="repassword" type="password" />
                            </Col>
                        </FormGroup>
                        <div>
                            <Button type="submit" bsStyle="default" right>Register</Button>
                        </div>
                    </Form>
                }
            </Col>
        );
    }
}
function mapStateToProps(state){
    return {
        session: state.session,
        loginRegister: state.loginRegister,
    };
}
export default connect(mapStateToProps)(LoginRegister);
