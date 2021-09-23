<template>
  <div>
    <top-nav-bar></top-nav-bar>
    <div class="todo-container">
      <div class="todo-wrap">
        <h2>todo list案例</h2>
        <comp-todo-header :addTodo="addTodo" />
        <comp-todo-list
          :todos="todos"
          :checkTodo="checkTodo"
          :handleDelete="handleDelete"
        />
        <comp-todo-footer
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :uncheckAllTodo="uncheckAllTodo"
          :removeCompleted="removeCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import footer from "@/components/comp-todo-footer.vue";
import header from "@/components/comp-todo-header.vue";
import list from "@/components/comp-todo-list.vue";
export default {
  name: "todo list",
  components: {
    "comp-todo-footer": footer,
    "comp-todo-header": header,
    "comp-todo-list": list,
  },
  data() {
    return {
      todos: [
        { id: "10001", title: "eat", completed: false },
        { id: "10002", title: "sleep", completed: false },
        { id: "10003", title: "play", completed: true },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          console.log(todo);
          todo.completed = !todo.completed;
          console.log(todo);
        }
      });
    },
    handleDelete(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    checkAllTodo() {
      this.todos.forEach((todo) => {
        todo.completed = true;
      });
    },
    uncheckAllTodo() {
      this.todos.forEach((todo) => {
        todo.completed = false;
      });
    },
    removeCompleted() {
      this.todos = this.todos.filter((todo) => {
        return todo.completed === false;
      });
    },
  },
};
</script>

<style>
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 100%;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>