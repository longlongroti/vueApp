<template>
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>数据绑定v-bind</h1>
        <p>
            <!--通过花括号数据绑定-->
            {{msg}}
        </p>
        <div>
            {{type + ":" + msg}}
        </div>
        <!--通过v-bind 绑定属性-->
        <div v-bind:title="title" v-bind:msg="msg">
            这是一个div
        </div>
        <div :title="title" :msg="msg">
            这是一个div
        </div>
        <!--绑定动态属性-->
        <a :[attrName]="title">链接</a>
    </div>
</template>
<script>
    export default {
        name: "test",
        data() {
            console.log('~~~~',this)
            return {
                msg: "test msg",
                type: "text",
                title: "这是一个title",
                attrName: "title",

            }
        },
        mounted() {
            /*钩子函数*/
            setTimeout(() => {
                this.msg = "test msg mounted"
                this.attrName = "msg"
                console.log('~~~~',this)
            }, 500)
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