import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import AddTodo from "../components/add_todo/AddTodo";

export default function Home() {
  return (
    <Container>
      <Header />
      <AddTodo />
    </Container>
  );
}
