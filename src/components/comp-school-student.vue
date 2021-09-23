<template>

    <div>
        <comp-school></comp-school>
        <h2>学生名称{{studentName}}</h2>
        <h2>学生年龄{{age}}</h2>
        <button @click="showName">点我</button>
    </div>

</template>

<script>

    import ComponentA from '@/components/comp-school.vue'

    export default {
        components: {
            'comp-school': ComponentA,
        },
        data() {
            return {
                studentName: 'zhangsan',
                age: 14
            }
        }, methods: {
            showName() {
                alert(this.studentName)
            }
        }
    }
</script>
