<template>
  <ul class="todo-main">
    <comp-todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </ul>
</template>

<script>
import item from "@/components/comp-todo-item.vue";

export default {
  name: "todo-list",
  components: {
    "comp-todo-item": item,
  },
  props: ["todos"],
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>