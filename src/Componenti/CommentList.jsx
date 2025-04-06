import React from 'react';
import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment'; // Importa il componente SingleComment

const CommentList = ({ comments, setComments }) => {
  return (
    <ListGroup>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} setComments={setComments} />
      ))}
    </ListGroup>
  );
};

export default CommentList;