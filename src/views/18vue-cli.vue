<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        使用组件的三大步骤
        <ol>
            <li>定义组件（创建组件）</li>
            <li>注册组件</li>
            <li>使用组件</li>
        </ol>


        <ol>
            <li>定义组件时，不要写el，最终所有容器都要经过一个vm的管理，由vm中的el决定服务哪个容器</li>
            <li>data必须写成函数，避免组件复用时，数据存在引用关系</li>
            <li>局部注册，靠new vue 的时候传入components选项</li>
            <li>全局注册，靠vue.component('组件名'，组件)</li>
        </ol>

        <div>vc有的功能vm都有 vm的el功能 vc没有</div>
        <img alt="Vue logo" class="img-responsive" src="../assets/img/1631768191.jpg"><br><br>

        <h1>组件</h1>
        组件就是实现应用中局部功能代码和资源的集合
        <comp-school></comp-school>
        <hr>
        <comp-student></comp-student>

        <hr>
        <!--组件嵌套-->
        <comp-school-student></comp-school-student>
    </div>
</template>

<script>
    /*注册局部组件*/
    import ComponentA from '@/components/comp-student.vue'
    import ComponentB from '@/components/comp-school-student.vue'

    console.log(ComponentA)
    export default {
        name: "test2",
        data() {
            return {}
        },
        methods: {},
        computed: {},
        directives: {},
        components:{
            'comp-student': ComponentA,
            'comp-school-student':ComponentB

        },
        beforeCreate() {
            console.log('beforeCreate',this);
            // this.abeforeCreate.push('beforeCreate')
        },
        created() {
            console.log('created');
        },
        beforeMount() {
            console.log('beforeMount');
        },

        /*vue完成模板解析并把初始真实的dom元素放入页面后（挂载完毕）调用mounted*/
        mounted() {
            console.log('mounted');
        },
        beforeUpdate() {
            console.log('beforeUpdate');
        },
        updated() {
            console.log('updated');
        },
        beforeDestroy() {
            console.log('beforeDestroy');
        },
        destroyed() {
            console.log('destroyed');
        }


    }


</script>
<style>


    ol {
        text-align: left;
        font-size: 20px;
        color: red;
        font-style: italic;
        border: 4px solid bisque;
    }
    .img-responsive{
        width:100%;
        height: 100%;
    }
</style>
