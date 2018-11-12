import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form } from "quant-ui"
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
    
    handleAlertSubmit = (alertId) => {
        this.props.dispatch(
            routerRedux.push(`/alertdetail/${alertId}`)
        );
    }
    changeView = (viewName) => {
        this.props.dispatch(
            routerRedux.push(`/${viewName}`)
        );
    }
    
    render() {

        const { loading, detailTableSource } = this.props;
        
        return (
            <div>
                <AlertDetailHeader changeView={this.changeView} />

                <DetailTable
                    source={detailTableSource}
                    loading={loading}
                    changeView={this.changeView}
                />

                <Comments />

                <FileAttachment />

                <RelatedAlert 
                    onSubmit={this.handleAlertSubmit}
                />

                <AlertParameters />
            </div>
        );
    }
}


export default connect(({ loading, alertdetail }) => {
    const { detailTableSource } = alertdetail;
    return {
        loading: loading.models.alertdetail,
        detailTableSource
    }
})(
    Form.create()(AlertDetail)
)
