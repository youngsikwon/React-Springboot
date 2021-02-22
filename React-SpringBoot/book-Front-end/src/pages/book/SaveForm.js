import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SaveForm = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SaveForm;
