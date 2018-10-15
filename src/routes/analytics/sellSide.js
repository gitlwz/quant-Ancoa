import React, { Component } from 'react';
import { connect } from 'dva';

let data = [{
    left: "orders entered",
    right: "0"
}, {
    left: "orders entered",
    right: "0"
}, {
    left: "orders entered",
    right: "0"
}, {
    left: "orders entered",
    right: "0"
}, {
    left: "orders entered",
    right: "0"
}, {
    left: "orders entered",
    right: "0"
}, {
    left: "orders entered",
    right: "0"
}, {
    left: "orders entered",
    right: "0"
}, {
    left: "orders entered",
    right: "0"
}, {
    left: "orders entered",
    right: "0"
}, {
    left: "orders entered",
    right: "0"
}]

class Member extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="analytics-sellSide">

                {data.map(({ left, right }) => {
                    return (
                        <div className="analytics-sellSide-content">
                            <div className="analytics-left">{left}</div>
                            <div className="analytics-right">{right}</div>
                        </div>
                    )
                })
                }
            </div>

        );
    }
}
export default connect(({ analytics }) => {
    return {
    }
})(
    Member
)
