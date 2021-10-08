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
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        :value="todo.title"
        v-show="todo.isEdit"
        ref="inputEdit"
        @blur="saveTodo($event)"
      />
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">DELETE</button>
    <button
      v-show="!todo.isEdit"
      class="btn btn-primary"
      @click="editTodo($event, todo)"
    >
      EDIT
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "todo-item",
  props: ["todo"],
  data() {
    return {};
  },
  methods: {
    check(id) {
      pubsub.publish("checkTodo", id);
    },
    deleteTodo(id) {
      if (confirm("确定删除??")) this.$mybus.emit("handleDelete", id);
      // if (confirm("确定删除")) this.handleDelete(id);
    },
    editTodo(event, id) {
      this.todo.isEdit = true;
      // nexttick 会在下一次dom更新结束后执行回调
      this.$nextTick(function () {
        this.$refs.inputEdit.focus();
      });
    },
    saveTodo(evnet) {
      this.todo.isEdit = false;
      if (this.$refs.inputEdit.value)
        pubsub.publish("editTodos", {
          id: this.todo.id,
          title: this.$refs.inputEdit.value,
        });
      else alert("不能为空");
    },
  },
  mounted() {},
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