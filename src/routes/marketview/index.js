import React, { Component } from 'react';
import { connect } from 'dva';
class Member extends Component {
    render() {
        return (
            <div>
                <h1>市场行情视图</h1>
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
