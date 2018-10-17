import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Row, Col, Button, Select } from "quant-ui"
import AlertDetailHeader from './AlertDetailHeader';
import "./index.css";

class AlertDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
        this.id = props.match.params.id;
    }
    
    
    render() {
        return (
            <div>
                <AlertDetailHeader />
            </div>
        );
    }
}


export default connect(({ loading }) => {
    return {

    }
})(
    Form.create()(AlertDetail)
)
