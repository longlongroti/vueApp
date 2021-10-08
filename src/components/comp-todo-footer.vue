<template>
  <div class="todo-footer" v-show="todos.length">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll" />
    </label>
    <span>
      <span
        >已完成{{ completedTotal }}<span>/全部{{ todos.length }}</span></span
      >
    </span>
    <button class="btn btn-danger" @click="removeCompletedTodo">清除已完成任务</button>
    <button class="btn btn-danger" @click="unbind">解绑清除完成任务按钮</button>
  </div>
</template>

<script>
export default {
  name: "todo-list-footer",
  props: ["todos", "checkAllTodo"],
  methods: {
    checkAll(event) {
      console.log('@@@@@@@@@',this)
      if (event.target.checked) this.checkAllTodo();
      else this.$parent.uncheckAllTodo();
    },
    removeCompletedTodo(){
      if(confirm('确认删除已完成？'))this.$emit('r');
    },unbind(){
      // this.$off('r')
    }
  },
  computed: {
    completedTotal() {
      // let size = 0;
      // this.todos.forEach(element => {
      //   console.log(element)
      //   if(element.completed) size++;
      // });
      // return size;
      return this.todos.reduce((pre, current) => {
        return pre + (current.completed ? 1 : 0);
      }, 0);
    },
    isAll() {
      return (
        this.completedTotal > 0 && this.completedTotal === this.todos.length
      );
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>