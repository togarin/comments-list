import React, { useState, useEffect } from "react";
import {
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Icon,
  IconButton,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Delete } from "@material-ui/icons";
import AddCommentDialog from "./AddComment";

const CommentsList = () => {
  const [commentsList, setCommentsList] = useState([]);
  const [author, setAthor] = useState("");
  const [comment, setComment] = useState("");
  const [commentModal, setCommentModal] = useState(false);
  useEffect(() => {
    localStorage.items
      ? setCommentsList(JSON.parse(localStorage.getItem("items")))
      : setCommentsList([]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !comment) {
      return;
    }
    let commentObj = {
      id: `f${(+new Date()).toString(16)}`,
      author: author,
      text: comment,
      createdOn: new Date().toLocaleString(),
    };
    updateComments([...commentsList, commentObj]);
    setCommentModal(false);
    setAthor("");
    setComment("");
  };
  const updateComments = (commentsList) => {
    localStorage.setItem("items", JSON.stringify(commentsList));
    setCommentsList(commentsList);
  };
  const handleDelete = (commentID) => {
    const removeComment = commentsList.filter(
      (comment) => comment.id !== commentID
    );
    updateComments(removeComment);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left">Автор</TableCell>
              <TableCell align="left">Комментарий</TableCell>
              <TableCell align="left">Дата/время</TableCell>
              <TableCell align="left">Удалить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commentsList.map((comment) => (
              <TableRow key={comment.id}>
                <TableCell align="left">
                  {" "}
                  <Icon>
                    {" "}
                    <AccountCircleIcon />
                  </Icon>{" "}
                </TableCell>
                <TableCell align="left">{comment.author}</TableCell>
                <TableCell align="left">{comment.text}</TableCell>
                <TableCell>{comment.createdOn}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(comment.id)}>
                    {" "}
                    <Delete />{" "}
                  </IconButton>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCommentModal(true)}
      >
        Написать комментарий
      </Button>

      <AddCommentDialog
        isOpen={commentModal}
        onClose={() => {
          setCommentModal(false);
          setAthor("");
          setComment("");
        }}
        author={comment.author}
        commentText={comment.text}
        onAutorChange={setAthor}
        onCommentChange={setComment}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default CommentsList;
