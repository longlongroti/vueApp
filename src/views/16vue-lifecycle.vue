<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <h1>生命周期</h1>
        <h2 :style="{opacity: opacity}">欢迎学习vue</h2>
    </div>
</template>

<script>

    export default {
        name: "test2",
        data() {
            return {
                opacity:1
            }
        },
        methods: {},
        computed: {},
        directives: {
        }
    }


</script>
<style>
    .img-responsive {
        display: inline-block;
        height: auto;
        max-width: 100%;
    }
</style>
