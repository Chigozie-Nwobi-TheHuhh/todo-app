import React from "react";
import "./ListTodo.scss";

export default function ListTodo() {
  return (
    <div className="listTodo">
      <div className="listTodo__row">
        <div className="listTodo__items">Buy new laptop</div>
        <div className="listTodo__delete">Del</div>
      </div>

      <div className="listTodo__row">
        <div className="listTodo__items">Create Codehence Course</div>
        <div className="listTodo__delete">Del</div>
      </div>

      <div className="listTodo__row">
        <div className="listTodo__items">Create Portfolio Site</div>
        <div className="listTodo__delete">Del</div>
      </div>

      <div className="listTodo__row">
        <div className="listTodo__items">Revise Assignment</div>
        <div className="listTodo__delete">Del</div>
      </div>
    </div>
  );
}
