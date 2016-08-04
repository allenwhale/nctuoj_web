import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
import {
    Panel,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap';


class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <Panel header="About">
                            You can report bug to following email address:
                            <ul>
                                <li>wingemerald@gmail.com</li>
                                <li>allencat850502@gmail.com</li>
                            </ul>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={12}>
                        <Panel header="Web History">
                            <ListGroup fill>
                                <ListGroupItem>2015/12/09 Beta 0.5</ListGroupItem>
                                <ListGroupItem>2014/09/01 Start Developing</ListGroupItem>
                            </ListGroup>
                        </Panel>
                    </Col>
                    <Col md={6} sm={12}>
                        <Panel header="Judge History">
                            <ListGroup fill>
                                <ListGroupItem>2015/12/09 Beta 1.0</ListGroupItem>
                                <ListGroupItem>2014/09/01 Start Developing</ListGroupItem>
                            </ListGroup>
                        </Panel>
                    </Col>
                </Row>

            </div>
       );
    }
}


function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(Index);
