import React from 'react';
import { Form, Input, Button } from "quant-ui"
import AlertLevel from './AlertLevel';
import "./header.less";

const FormItem = Form.Item;
const ButtonGroup = Button.Group;

function AlertsHeader (props) {
    const { getFieldDecorator, getFieldValue } = props.form;

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <Form layout="inline" onSubmit={props.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('issue')(
                            <Input placeholder="Issue" />
                        )}
                    </FormItem>

                    <FormItem style={{marginRight: 40}} >
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={!getFieldValue('issue')}
                        >
                            View Issue
                        </Button>
                    </FormItem>

                    <FormItem>
                        <Button type="primary">
                            Search Issues
                        </Button>
                    </FormItem>
                </Form>
            </div>
            <div>
                <FormItem className="header-item" >
                    <ButtonGroup>
                        <Button type="primary" >
                            OFF
                        </Button>
                        <Button type="primary" >
                            AlertFilters
                        </Button>
                    </ButtonGroup>
                </FormItem>
                
                <div className="header-item" style={{margin: '0 10px'}} >
                    <AlertLevel />
                </div>
                
                <FormItem className="header-item" >
                    <Button type="primary">
                        Configuration
                    </Button>
                </FormItem>
            </div>
        </div>
    );
};

export default Form.create()(AlertsHeader);