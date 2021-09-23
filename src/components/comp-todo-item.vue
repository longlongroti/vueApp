<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="check(todo.id)"
      />

      <!-- 不建议直接修改prop中得数据 -->
      <!-- <input type="checkbox" v-model="todo.completed"/> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">DELETE</button>
  </li>
</template>

<script>
export default {
  name: "todo-item",
  props: ["todo", "checkTodo", "handleDelete"],
  methods: {
    check(id) {
      this.checkTodo(id);
    },
    deleteTodo(id) {
      if (confirm("确定删除")) this.handleDelete(id);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>