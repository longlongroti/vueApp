<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>内置命令</h1>
        <img alt="Vue logo" class="img-responsive" src="../assets/img/1631528117.jpg"><br><br>
        <img alt="Vue logo" class="img-responsive" src="../assets/img/1631528173.jpg"><br><br>
        <h1>{{text}}</h1>
        <h1 v-text="text"></h1>
        <div v-text="text2"></div>
        <div v-html="text2"></div>
        <hr>
        <img alt="Vue logo" class="img-responsive" src="../assets/img/1631580367.jpg"><br><br>
        <div v-cloak>display none</div>
        <hr>
        <img alt="Vue logo" class="img-responsive" src="../assets/img/1631580643.jpg"><br><br>
        <div v-once>初始化的n值是：{{n}}</div>
        <div>当前的n值是：{{n}}</div>
        <button @click="n++">点我n++</button>
        <hr>
        <img alt="Vue logo" class="img-responsive" src="../assets/img/1631580880.jpg"><br><br>
        <h2 v-pre>vue其实很简单</h2>
        <div v-pre>当前的n值是：{{n}}</div>
        <button @click="n++">点我n++</button>
    </div>
</template>

<script>

    export default {
        name: "test2",
        data() {
            return {
                text: 'shgjiabzlqo',
                text2: '<h3>加送多久哦啊</h3>',
                n: 1
            }
        },
        methods: {},
        computed: {},
    }


</script>
<style>


    [v-cloak] {
        display: none
    }
    ol {
        text-align: left;
        font-size:20px;
        color: red;
        font-style: italic;
        border: 4px solid bisque;
    }
</style>
