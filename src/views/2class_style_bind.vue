<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>绑定class，style</h1>
        <ol>
            <li>正常样式正常写 class='' 绑定样式用:class='xxx'xxx可以是字符串、数组、对象 </li>
            <li>字符串写法适用于 单个样式绑定 类名不确定 需要动态指定</li>
            <li>对象写法适用于 绑定多个样式，个数不确定，名字不确定</li>
            <li>数组写法适用于 绑定多个样式 个数确定 名字确定 但是不确定用不用</li>
            <li>style样式</li>
            <li>:style="{color:'red',fontSize:'20px'}"</li>
            <li>:style="styleObj2"</li>
        </ol>


        <div :class="random" @click="randomColor">点击切换样式</div>
        <!--绑定一个class 通过数组绑定多个class-->
        <div :class="classA" class='current1'>绑定class</div>
        <div :class="[classA,classB]">绑定class数组</div>
        <!--通过对象绑定class-->
        <div :class="classObj">通过对象绑定class1</div>
        <div :class="{current3 :false,current4:true}">通过对象绑定class2</div>
        <div :class="{current5 :isCurrent5,current6:isCurrent6}">通过对象绑定class3</div>
        <!--绑定style-->
        <div :style="{color:'red',fontSize:'20px'}">
            绑定style
        </div>
        <div :style="{color:color1,fontSize:fontSize1}">
            绑定style
        </div>
        <div :style="styleObj2">
            绑定style对象
        </div>
    </div>
</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                classA: "current",
                random: "current",
                classB: "current2",
                classObj: {
                    current3: true,
                    current4: false
                },
                isCurrent5: true,
                isCurrent6: true,
                color1: 'blue',
                fontSize1: '12px',
                styleObj2: {
                    color: 'orange',
                    fontSize: '40px'
                }
            }
        },
        mounted() {
            /*钩子函数*/
            setTimeout(() => {
                this.color1 = 'purple';
                this.fontSize1 = '32px'
            }, 500)
        },
        methods:{
            randomColor(){
                const arr=['current1','current3','current4','current6']
                const index = Math.floor(Math.random()*4)
                this.random=arr[index]
            }
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
    .current {
        border: 4px solid blue;
    }

    .current1 {
        width: 200px;
        height: 200px;
        background-color: aliceblue;
    }

    .current2 {
        width: 400px;
        height: 500px;
    }

    .current3 {
        width: 100px;
        height: 100px;
        border: 4px solid red;
    }

    .current4 {
        width: 400px;
        height: 300px;
        border: 4px solid chartreuse;
        background-color: darkorange;

    }

    .current5 {
        width: 200px;

    }

    .current6 {
        height: 200px;
        border: 4px solid dimgray;
        background-color: darkslategrey;


    }
</style>
