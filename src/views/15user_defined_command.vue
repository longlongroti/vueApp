<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>自定义指令</h1>
        <h2>当前的n值是<span v-text="n"></span></h2>
        <h2>当前的大n值是<span v-big-number="n"></span></h2>

        <button @click="n++">点我n++</button>
        <button @click="m++">点我m++{{m}}</button>

        <hr>

        <input type="text" v-fbind:value="n">

        <hr>
        <input type="text" v-focus2>
        <hr>
        <input type="text" v-focus3>
    </div>
</template>

<script>

    export default {
        name: "test2",
        data() {
            return {
                n: 1,
                m: 1,
            }
        },
        methods: {},
        computed: {},
        directives: {
            /*
            * 自定义函数何时被调用
            * 1 指令与元素成功绑定时
            * 2 指令所在的模板被重新解析时
            * */
            'big-number'(element, binding) {
                console.log(element, binding,this);
                element.innerHTML = binding.value * 10

            }, fbind: {
                created(element, binding) {
                    element.style.backgroundColor='red'

                    console.log('created',element, binding,this)
                },
                mounted(element, binding) {
                    console.log('mounted',element, binding,this)
                    element.value = binding.value

                },
                updated(element, binding) {
                    console.log('updated',element, binding,this)
                    element.value = binding.value
                }
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
