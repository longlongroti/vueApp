<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>


        <h1>生命周期</h1>
        <ol>
            <li>生命周期回调函数，也叫生命周期钩子函数</li>
            <li>vue在关键时刻帮我们调用的一些特殊名称函数</li>
            <li>生命周期函数的名字不能更改，但函数的具体内容是程序员根据需求编写的</li>
            <li>生命周期函数中的this指向是vm或者组件实例对象</li>
        </ol>
        <h2 :style="{opacity: op}">欢迎学习vue</h2>
        <button @click="stopIt">点我停止</button>

    </div>
</template>

<script>

    export default {
        name: "test2",
        data() {
            return {
                op: 1,

            }
        },
        methods: {
            stopIt() {
                clearInterval(this.timeId)
                // this.$destroy()
            }

        },
        computed: {},
        directives: {},

        beforeCreate() {
            console.log('beforeCreate');
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
            this.timeId = setInterval(() => {
                console.log(this.op);
                this.op -= 0.1;
                if (this.op <= 0) this.op = 1


            }, 1000)
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
<style scoped>

    ol {
        text-align: left;
        font-size: 20px;
        color: red;
        font-style: italic;
        border: 4px solid bisque;
    }
</style>
