<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>v-if条件判断</h1>

        <ol>
            <li>v-if适用于切换频率低的场景，直接移除dom元素，v-if可以和v-else-if、v-else一起使用，但要求结构不能被打断</li>
            <li>v-show不展示的的dom元素使用样式隐藏掉，适用于切换频率高的场景</li>
            <li>使用template 不会渲染在dom里 template 只能v-if使用 不能v-show使用</li>
        </ol>
        <!--v-if条件判断为false，删除该元素-->
        <div v-if="isShow">v-if true 时候显示</div>
        <!--v-if true时候 v-else-if不会显示 -->
        <div v-else-if="isElseIf">v-if false v-else-if true 时候显示</div>
        <div v-else>v-if false v-else-if false v-else显示</div><hr>
        <!--控制多个div 外部添加一个div 多余的dom元素-->
        <div v-if="isShow2">
            <div>first row</div>
            <div>second row</div>
        </div><hr>
        <!--使用template 不会渲染在dom里 template 只能v-if使用 不能v-show使用-->
        <template v-if="isShow2">
            <div>first row</div>
            <div>second row</div>
        </template>

        <!--v-show dom不会被删除 样式display none
        v-show不能使用在template上 只能在dom上使用-->
        <div v-show="isShow3">div 通过v-show 控制条件渲染</div> <hr>
        <div v-show="1===1">表达式控制</div>

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
     ol {
        text-align: left;
        font-size:20px;
        color: red;
        font-style: italic;
        border: 4px solid bisque;
    }
</style>
