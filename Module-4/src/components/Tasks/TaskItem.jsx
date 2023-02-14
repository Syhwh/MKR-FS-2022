/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const TaskItem = ({ task }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Link to={`${task.id}`}>Read more {task.id}</Link>
      </Card.Body>
    </Card>
  );
};
