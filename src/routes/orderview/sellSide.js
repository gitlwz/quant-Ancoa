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
            <div className="orderview-sellSide anc-block-height">

                {data.map(({ left, right }) => {
                    return (
                        <div className="orderview-sellSide-content">
                            <div className="orderview-left">{left}</div>
                            <div className="orderview-right">{right}</div>
                        </div>
                    )
                })
                }
            </div>

        );
    }
}
export default connect(({ orderview }) => {
    return {
    }
})(
    Member
)
