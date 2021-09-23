<template>
    <div>
        <h2>学生名称{{studentName}}</h2>
        <h2>学生年龄{{age}}</h2>
        <button @click="showName">点我</button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                studentName: 'zhangsan',
                age: 14
            }
        },methods:{
            showName(){
                alert(this.studentName)
            }
        }
    }
</script>
