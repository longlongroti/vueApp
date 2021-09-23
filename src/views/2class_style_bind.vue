<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <h1>绑定class，style</h1>
        <!--绑定一个class 通过数组绑定多个class-->
        <div :class="classA">绑定class</div>
        <div :class="[classA,classB]">绑定class</div>
        <!--通过对象绑定class-->
        <div :class="classObj">通过对象绑定class</div>
        <div :class="{current3 :false,current4:true}">通过对象绑定class</div>
        <div :class="{current5 :isCurrent5,current6:isCurrent6}">通过对象绑定class</div>
        <!--绑定style-->
        <div :style="{color:'red',fontSize:'20px'}">
            绑定style
        </div>
        <div :style="{color:color1,fontSize:fontSize1}">
            绑定style
        </div>
        <div :style="styleObj2">
            绑定style
        </div>
    </div>
</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                classA: "current",
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
                this.color1 = 'purple',
                    this.fontSize1 = '32px'
            }, 500)
        }
    }
</script>
<style>

</style>
