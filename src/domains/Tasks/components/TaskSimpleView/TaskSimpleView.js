import {
  Container,
  Title,
  Row,
  Col,
  Text,
  Box,
  Button,
} from "@qonsoll/react-design";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";

const TaskSimpleView = ({ title, id, date, done, onDelete, onDone }) => {

  return (
    <Container style={{ backgroundColor: "#d9dbdc" }} px={1} py={1}>
      <Row v="center" noGutters>
        <Col>
          <Box>
            <Title level={4} delete={done}>
              {title}
            </Title>
            <Text variant="body2">{date.toDateString()}</Text>
          </Box>
        </Col>
        <Col cw="auto">
          <Box display="flex">
            <Box mr={2}>
              <Button
                disabled={done}
                onClick={() => onDone(id)}
                type="primary"
                icon={<CheckOutlined />}
              />
            </Box>
            <Button onClick={() => onDelete(id)} danger icon={<DeleteOutlined />} />
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskSimpleView;
