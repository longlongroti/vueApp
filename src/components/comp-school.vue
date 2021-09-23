<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/1v-bind">数据绑定v-bind</router-link>
        |
        <router-link to="/2class_style_bind">绑定class，style</router-link>
        |
        <router-link to="/3v-if">v-if条件判断</router-link>
        |
        <router-link to="/4v-for">v-for 遍历数组</router-link>
        |
        <router-link to="/4.2v-for">v-for过滤</router-link>
        |
        <router-link to="/5v-on">v-on 事件绑定</router-link>
        |
        <router-link to="/6event_modifier-keyboards_event">事件修饰符</router-link>
        |
        <router-link to="/7.3computed-watch">计算和侦听属性</router-link>
        |
        <router-link to="/7.1watch">侦听属性</router-link>
        |
        <router-link to="/7.2deep_watch">深度监视</router-link>
        |
        <router-link to="/8v-model">双向绑定v-model</router-link>
        |
        <router-link to="/8.2v-model-form">表单v-model</router-link>
        |
        <router-link to="/9mvvm">MVVM模型</router-link>
        |
        <router-link to="/10object_define_property">object define property</router-link>
        |
        <router-link to="/11data_proxy">数据代理</router-link>
        |
        <router-link to="/12watch_data_change">Vue监测数据原理</router-link>
        |
        <router-link to="/13filter">过滤器</router-link>
        |
        <router-link to="/14build_in_command">内置命令</router-link>
        |
        <router-link to="/15user_defined_command">自定义指令</router-link>
        |
        <router-link to="/16vue-lifecycle">生命周期</router-link>
        |
        <router-link to="/16.2vue-lifecycle">生命周期2</router-link>
        |
        <router-link to="/17vue-component">组件</router-link>
        |
    </div>
</template>

<script>


</script>
<style>

    #nav {
        padding: 30px;
    }
    a {
        font-weight: bold;
        color: #2c3e50;
    }

    .router-link-exact-active {
        color: #42b983;
    }



</style>
