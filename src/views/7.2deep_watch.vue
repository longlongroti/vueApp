<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <h1>深度侦听</h1>
        <h2>今天天气很{{status}}</h2>
        <button @click="swap">切换天气</button>
        <hr>
        <h3>a={{numbers.a}}</h3>
        <button @click="numbers.a++">点我让a++</button>
        <h3>b={{numbers.b}}</h3>
        <button @click="numbers.b++">点我让b++</button>
    </div>

</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                isHot: true,
                numbers: {
                    a: 1,
                    b: 1
                }

            }
        },
        methods: {
            swap() {
                this.isHot = !this.isHot
                this.x++
            }
        },
        watch: {
            isHot: {
                handler(newvalue, oldvalue) {
                    console.log('is hot 修改了', newvalue, oldvalue)
                },
                // immediate:true
            },
            /*监视多级结构中莫格属性的变化*/
            // 'numbers.a': {
            //     handler(newvalue, oldvalue) {
            //         console.log('a 修改了 ', newvalue, oldvalue)
            //     }
            // }
            'numbers': {
                deep: true,
                handler() {
                    console.log('numbers 修改了 ')
                }
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
<style>
    ol {
        text-align: left;
    }
</style>
