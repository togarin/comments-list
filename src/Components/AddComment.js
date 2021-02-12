import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@material-ui/core";

const AddCommentDialog = (props) => {
  const {
    subtitle,
    isOpen,
    onClose,
    author,
    commentText,
    onAutorChange,
    onCommentChange,
    onSubmit,
  } = props;
  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Напиши комментарий</DialogTitle>
      <DialogContent>
        <DialogContentText>{subtitle}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="author"
          label="Niсkname"
          type="text"
          fullWidth
          value={author}
          onChange={(e) => onAutorChange(e.target.value)}
        />
        <TextField
          margin="dense"
          id="commentText"
          label="Your comment"
          type="text"
          fullWidth
          value={commentText}
          onChange={(e) => onCommentChange(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Отмена
        </Button>
        <Button onClick={onSubmit} color="primary">
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCommentDialog;
