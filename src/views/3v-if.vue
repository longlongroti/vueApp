<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <h1>v-if条件判断</h1>
        <!--v-if条件判断为false，删除该元素-->
        <div v-if="isShow">v-if true 时候显示</div>
        <!--v-if true时候 v-else-if不会显示 -->
        <div v-else-if="isElseIf">v-if false v-else-if true 时候显示</div>
        <div v-else>v-if false v-else-if false v-else显示</div>
        <!--控制多个div 外部添加一个div 多余的dom元素-->
        <div v-if="isShow2">
            <div>first row</div>
            <div>second row</div>
        </div>
        <!--使用template 不会渲染在dom里-->
        <template v-if="isShow2">
            <div>first row</div>
            <div>second row</div>
        </template>

        <!--v-show dom不会被删除 样式display none
        v-show不能使用在template上 只能在dom上使用-->
        <div v-show="isShow3">div 通过v-show 控制条件渲染</div>

    </div>
</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                isShow: true,
                isElseIf: true,
                isShow2: true,
                isShow3: true,
            }
        },
        mounted() {
            /*钩子函数*/
            setTimeout(() => {
                this.isShow = false;
            }, 1500)
            setTimeout(() => {
                this.isElseIf = false;
            }, 3500)
            setTimeout(() => {
                this.isShow3 = false;
                this.isShow = true;
            }, 3500)
        }
    }
</script>
<style>

</style>
