<template>
    <div class="demo">
        <h2 @click="alertName">学校名称{{name}}</h2>
        <h2>学校地址{{address}}</h2>
        <button @click="showName">点我学校</button>
    </div>
</template>

<script>
    import {myJs} from '../mixin.js'
    export default {
        data() {
            return {
                name: '五一路小学',
                address: '杏花林五一路小学'
            }
        },methods:{
            showName(){
                /*
                *
                * */
                console.log('@',this)
                alert(this.name)
            }
        },
        mixins:[myJs]
    }
</script>
<style scoped>
    .demo{
        background-color: mediumspringgreen;
    }
</style>
