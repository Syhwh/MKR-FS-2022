import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { TaskItem } from './TaskItem';

// create a tasks list array

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Task 1 description',
    status: false
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Task 2 description',
    status: false
  }
];

export const TasksList = () => {
  return (
    <Container>
      <h1>Tasks List</h1>
      <Row>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </Row>
    </Container>
  );
};
