<template>
    <div>
        <h2>学校名称{{name}}</h2>
        <h2>学校地址{{address}}</h2>
        <button @click="showName">点我</button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                name: '五一路小学',
                address: '杏花林五一路小学'
            }
        },methods:{
            showName(){
                alert(this.name)
            }
        }
    }
</script>
