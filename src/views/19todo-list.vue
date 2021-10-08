<template>
  <div>
    <top-nav-bar></top-nav-bar>
    <div class="todo-container">
      <div class="todo-wrap">
        <h2>todo list案例</h2>
        <comp-todo-header :addTodo="addTodo" />
        <comp-todo-list :todos="todos" />

        <!-- 通过父组件给子组件传递函数类型的props方式实现 -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现 -->
        <comp-todo-footer
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          @r="removeCompleted"
          @click="clicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import footer from "@/components/comp-todo-footer.vue";
import header from "@/components/comp-todo-header.vue";
import list from "@/components/comp-todo-list.vue";
import pubsub from "pubsub-js";

export default {
  name: "todo list",
  components: {
    "comp-todo-footer": footer,
    "comp-todo-header": header,
    "comp-todo-list": list,
  },
  data() {
    return {
      todos: JSON.parse(window.localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    checkTodo(_, id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
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
    clicked() {
      console.log(123);
    },
    editTodos(_, obj) {
      console.log(_,obj);
      this.todos.forEach((todo) => {
        if (todo.id === obj.id) {
          todo.title = obj.title;
        }
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(newval) {
        console.log(newval);
        window.localStorage.setItem("todos", JSON.stringify(newval));
      },
    },
  },
  mounted() {
    this.$mybus.on("handleDelete", this.handleDelete);
    pubsub.subscribe("checkTodo", this.checkTodo);
    pubsub.subscribe("editTodos", this.editTodos);
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
.btn-primary {
  color: #fff;
  background-color: #4977da;
  border: 1px solid #49d0da;
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