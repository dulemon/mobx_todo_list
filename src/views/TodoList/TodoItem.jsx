import React, { Component } from "react";
import { Button, Checkbox } from "antd";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, todoList } = this.props;
    return (
      <div className={item.finished ? "todo finished" : "todo"} key={item.id}>
        <div className="left">
          <Checkbox
            onChange={() => todoList.changeTodoStatus(item)}
            checked={item.finished}
          ></Checkbox>
          <span style={{ marginLeft: 10 }}>{item.title}</span>
        </div>
        <div className="right">
          <Button size="small" onClick={() => todoList.delTodo(item)}>
            删除
          </Button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
