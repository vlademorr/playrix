import React  from 'react';
import { Form, Input, Button } from 'antd';
import { TimePicker, DatePicker } from 'antd';
import "./style.css";

const EventAdding = ({eventAdding}) => {
    const [form] = Form.useForm();
    const onFinish = (value) => {
        const unix = (
                +value.dateChange.unix()
                - +value.dateChange.format('H') * 3600
                - +value.dateChange.format('mm') * 60
                - +value.dateChange.format('ss')
            )
            + +value.timeChange.format('H') * 3600
            + +value.timeChange.format('mm') * 60
            + +value.timeChange.format('ss');
        const event = {
            eventName: value.eventName,
            eventTime: unix
        };
        eventAdding(event);
        form.resetFields();
    };
    return (
        <div className="event-adding">
            <Form
                form={form}
                name="basic"
                onFinish={onFinish}
            >
                <div className="inputs-event-adding">
                    <Form.Item
                        name="eventName"
                        rules={[{ required: true, message: 'Please input your event!'}]}
                    >
                        <Input placeholder="Enter the event name"/>
                    </Form.Item>
                    <Form.Item
                        name="dateChange"
                        rules={[{ required: true, message: 'Please input date!' }]}
                    >
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item
                        name="timeChange"
                        rules={[{ required: true, message: 'Please input time!' }]}
                    >
                        <TimePicker
                            format="HH:mm"
                        />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </div>
            </Form>
        </div>
    )
};

export default EventAdding;