import React from 'react';
import { Form, Input, Divider, Button, Card, } from 'quant-ui';

const FormItem = Form.Item;

const RelatedAlert = ({form, onSubmit}) => {
    const { getFieldDecorator, getFieldValue } = form;
    const alertId = getFieldValue('alertId');

    const handleSubmit = (e) => {
        onSubmit(alertId);
        e.preventDefault();
    }

    return (
        <div>
            <Divider>Related Alerts</Divider>
            <Card>
                <Form layout='inline' onSubmit={handleSubmit}>
                    <FormItem label="Enter Alert ID: ">
                        {getFieldDecorator('alertId')(
                            <Input type="text" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={!(alertId && alertId.trim())}
                        >
                            Submit
                        </Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    );
};

export default Form.create()(RelatedAlert);