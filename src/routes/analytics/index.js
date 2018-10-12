import React, { Component } from 'react';
import { connect } from 'dva';
import Sandbox from "./sandbox";
import { Button } from "quant-ui"

class Member extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div>
                <Button>Run Alerts</Button>
                <div clasName="ancoa-content">
                    <Sandbox />
                </div>
            </div>

        );
    }
}
export default connect(({ loading }) => {

    return {

    }

})(
    Member
)
