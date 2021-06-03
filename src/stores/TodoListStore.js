import { observable, computed, action, makeObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class TodoListStore {
  constructor() {
    makeObservable(this);
  }
  // 可被观察的待办项 todos
  @observable todos = [];
  // 计算属性，从可观察属性 todos 衍生出来，返回没有完成的待办项的个数
  @computed get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
  // 动作用来更新 todos 属性的值，添加待办项
  @action
  addTodo = (title) => {
    if (!title) return;
    this.todos.push({ id: uuidv4(), title, finished: false });
  };

  // 动作 用来更新 todos 属性的值，删除待办项
  @action
  delTodo = (item) => {
    let result = [];
    this.todos.map((tItem) => {
      if (tItem.id !== item.id) {
        result.push(tItem);
      }
    });
    this.todos = result;
  };

  // 动作 用来更新 todos 属性的值，将待办项变为已完成
  @action
  changeTodoStatus = (item) => {
    if (item.finished) {
      this.todos.filter((tItem) => tItem.id === item.id)[0].finished = false;
    } else {
      this.todos.filter((tItem) => tItem.id === item.id)[0].finished = true;
    }
  };
}

// 此处的store对象可以理解为是一个单例，将其引用暴露出去
export default new TodoListStore();
