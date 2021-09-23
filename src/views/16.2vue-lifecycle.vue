<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>生命周期</h1>
        <ol>
            <li>将要创建---调用 beforeCreate 函数</li>
            <li>创建完毕---调用 created 函数</li>
            <li>将要挂载---调用 beforeMount 函数</li>
            <li>挂载完毕---调用 mounted 函数 --- 重要的钩子(发送ajax请求、启动定时器、绑定自定义事件、订阅消息等)</li>
            <li>将要更新---调用 beforeUpdate 函数</li>
            <li>更新完毕---调用 updated 函数</li>
            <li>将要摧毁---调用 beforeDestroy 函数 ---重要的钩子（清除定时器、解绑自定义事件、取消订阅消息等） </li>
            <li>摧毁完毕---调用 destroyed 函数</li>
        </ol>
        <button @click="add">{{n}}</button>
        <button @click="destroy">点我销毁vm</button>
    </div>
</template>

<script>

    export default {
        name: "test2",
        data() {
            return {
                n: 1
            }
        },
        methods: {
            add() {
                this.n += 1;
            },
            destroy(){

            }
        },
        computed: {},
        directives: {},

        /*初始化生命周期、事件，但数据代理还没开始
        * 无法访问到data中的数据、method中的方法
        * */
        beforeCreate() {
            console.log('beforeCreate', this, this.n, this.add);
        },
        /*
        *初始化数据监测、数据代理
        * 可以访问到data中的数据、method中配置的方法
        * */
        created() {
            console.log('created', this, this.n, this.add);
        },
        /*
        *此时页面不呈现任何dom元素，对dom操作无效
        * */
        beforeMount() {
            console.log('beforeMount');

        },
        /*vue完成模板解析并把初始真实的dom元素放入页面后（挂载完毕）调用mounted
        * 对dom的操作均有效(尽可能避免，使用vue操作dom)
        * 至此初始化过程结束，一般在此进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件等初始化操作
        * */
        mounted() {
            console.log('mounted');
            // document.querySelector('h1').innerText='asd'
        },
        /*
        * 数据更新时，数据是新的单页面是就得，页面尚未跟数据保持同步
        * */
        beforeUpdate() {
            console.log('beforeUpdate',this.n);
        },
        /*
        * beforeUpdate跟updated之间 根据新数据，生成新的虚拟dom
        * 随后与旧的虚拟dom进行比较，最终完成页面更新
        * */
        /*
        * 此时，数据是新的，页面也是新的，页面和数据保持同步了
        * */
        updated() {
            console.log('updated',this.n);
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
        font-size:20px;
        color: red;
        font-style: italic;
        border: 4px solid bisque;
    }
</style>
