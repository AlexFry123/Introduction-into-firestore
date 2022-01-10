import { Form } from "antd";
import { Input, Button } from "@qonsoll/react-design";

const TaskForm = ({ onFinish }) => {
  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="title"
        rules={[{ required: true, message: "Please, enter task" }]}
      >
        <Input placeholder="Enter task" />
      </Form.Item>
      <Button block htmlType="submit">
        Add task
      </Button>
    </Form>
  );
};

export default TaskForm;
