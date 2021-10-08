<template>
    <div class="box">
        <router-view />
        <br>
        <br>
        <br>
        <nav-bar></nav-bar>
<!--        <nav-bar :idx="0"></nav-bar>-->
    </div>
</template>


<script>
    // @ is an alias to /src

</script>
<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 3.5rem;
        left: 0;
        overflow: auto;
        background-color: rgba(231, 222, 219, 0.192);
    }

</style>
