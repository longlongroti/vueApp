<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>侦听属性</h1>

        <ol>
            <li>当被监视的属性变化是，回调函数自动调用，进行相关操作</li>
            <li>监视的属性必须存在才能被监视</li>
            <li>监视的俩种写法 watch配置，通过vm.$watch监视</li>
        </ol>
        <h2>今天天气很{{status}}，{{x}}</h2>
        <button @click="swap">切换天气</button>
        <button @click="isHot = !isHot;x++">切换天气2</button>
        <!--报错 去vm中找不到alert-->
        <button @click="alert(1)">alert</button>
    </div>

</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                isHot: true,
                x:1
            }
        },
        methods: {
            swap() {
                this.isHot = !this.isHot
                this.x++
            }
        },
        watch: {
            isHot:{
                handler(newvalue,oldvalue){
                    console.log('is hot 修改了',newvalue,oldvalue)
                },
                immediate:true
            }
        },
        mounted() {
            /*钩子函数*/
            setTimeout(() => {

            }, 1500)

        }, computed: {
            status() {
                return this.isHot ? '炎热' : '凉爽'
            }
        }
    }
</script>
<style scoped>
     ol {
        text-align: left;
        font-size:20px;
        color: red;
        font-style: italic;
        border: 4px solid bisque;
    }
</style>
