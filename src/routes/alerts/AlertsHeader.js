import React from 'react';
import { Form, Input, Button, Row, Col } from "quant-ui"
import AlertLevel from './AlertLevel';
import "./header.css";

const FormItem = Form.Item;
const ButtonGroup = Button.Group;

function AlertsHeader (props) {
    const { getFieldDecorator, getFieldValue } = props.form;

    return (
        <Row type="flex" justify='space-between'>
            <Col>
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
                            查询
                        </Button>
                    </FormItem>
                </Form>
            </Col>
            <Col>
                <FormItem className="header-item" >
                    <ButtonGroup>
                        <Button type="primary" >
                            OFF
                        </Button>
                        <Button type="primary" >
                            过滤警告信息
                        </Button>
                    </ButtonGroup>
                </FormItem>
                
                <div className="header-item" style={{margin: '0 20px'}} >
                    <AlertLevel />
                </div>
                
                <FormItem className="header-item" >
                    <Button type="primary">
                        配置
                    </Button>
                </FormItem>
            </Col>
        </Row>
    );
};

export default Form.create()(AlertsHeader);