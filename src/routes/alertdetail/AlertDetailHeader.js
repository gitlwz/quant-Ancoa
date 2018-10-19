import React from 'react';
import { Form, Row, Col, Button, Select } from "quant-ui"

const FormItem = Form.Item;
const Option = Select.Option;

const AlertDetailHeader = (props) => {
    const { getFieldDecorator } = props.form;
    return (
        <div style={{marginBottom: 5}}>
            <Row type="flex" justify="space-between">

                <Col>
                    <Form layout="inline">
                        <FormItem> View in: </FormItem>
                        <FormItem>
                            <Button type="primary">TradeView</Button>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">OrderView</Button>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">DataView</Button>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">NetworkView</Button>
                        </FormItem>
                    </Form>
                </Col>

                <Col>
                    <Form layout="inline">
                        <FormItem
                            label="Assign To:"
                        >
                            {getFieldDecorator('assign')(
                                <Select style={{ width: "140px" }} placeholder="">
                                    <Option value="user1">User 1</Option>
                                    <Option value="user2">User 2</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem
                            label="Change Status To:"
                        >
                            {getFieldDecorator('changestatus')(
                                <Select style={{ width: "140px" }} placeholder="" disabled>
                                    <Option value="unassigned">Unassigned</Option>
                                    <Option value="open">Open</Option>
                                    <Option value="resolved">Resolved</Option>
                                    <Option value="closed">Closed</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem
                            label="Set Priority To:"
                        >
                            {getFieldDecorator('setpriority')(
                                <Select style={{ width: "140px" }} placeholder="">
                                    <Option value="low">Low</Option>
                                    <Option value="medium">Medium</Option>
                                    <Option value="high">High</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem
                            label="Classify As:"
                        >
                            {getFieldDecorator('classify')(
                                <Select style={{ width: "140px" }} placeholder="">
                                    <Option value="unclassified">Unclassified</Option>
                                    <Option value="other">Other</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Form>
                </Col>

            </Row>
        </div>
    );
};

export default Form.create()(AlertDetailHeader);