import { List } from "antd";
import { TaskSimpleView } from "..";

const TasksList = ({ tasks, onDone, onDelete }) => {
  return (
    <List
      dataSource={tasks}
      renderItem={(item) => (
        <List.Item>
          <TaskSimpleView {...item} onDelete={onDelete} onDone={onDone} />
        </List.Item>
      )}
    />
  );
};

export default TasksList;
