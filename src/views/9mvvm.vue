<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>MVVM模型</h1>

        <h1>M model plain javascripy object data中的数据</h1>
        <h1>V view视图 DOM</h1>
        <h1>VM视图模型 vue实例对象 data biding dom Listener</h1>
        <h1>data中的所有属性最后都出现在了vm身上</h1>
        <h1>vm上的所有属性及vue原型上所有属性，在vue模板中都可以直接使用</h1>
        <img alt="Vue logo" src="../assets/img/1631088979.jpg" class="img-responsive">
        <img alt="Vue logo" src="../assets/img/1631089128.jpg" class="img-responsive">

        <hr>
        <h3>{{a}}</h3>
        <h3>{{b}}</h3>

    </div>
</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                a:1,
                b:2
            }
        },
        methods: {},
        watch: {},
        mounted() {
            /*钩子函数*/
            setTimeout(() => {
            }, 1500)
        },
        computed: {}
    }
</script>
<style>

</style>
