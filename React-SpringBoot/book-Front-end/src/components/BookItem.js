import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//const {id, title, author} = props; 이것보다 아래처럼 하는 것이 더 좋다.
const BookItem = (props) => {
  const { id, title, author } = props.book;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={'/post/' + id} className="btn btn-primary">
          상세 보기
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
