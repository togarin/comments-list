import React from "react";
import {Container} from "@material-ui/core";
import CommentsList from "../src/Components/CommentsList";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <CommentsList />
      </Container>
    </>
  );
}

export default App;
