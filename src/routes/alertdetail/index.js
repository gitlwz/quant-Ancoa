import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Divider } from "quant-ui"
import AlertDetailHeader from './AlertDetailHeader';
import DetailTable from './DetailTable';
import AlertParameters from './AlertParameters';
import RelatedAlert from './RelatedAlert';
import FileAttachment from './FileAttachment';
import Comments from './Comments';
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

                <DetailTable />

                <Comments />

                <FileAttachment />

                <RelatedAlert 
                    onSubmit={(alertId)=>{console.log(alertId)}}
                />

                <AlertParameters />
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
