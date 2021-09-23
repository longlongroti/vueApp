<template>
    <div class="footer">
        <div v-for='(item,index) of items' :class='[item.cls,{on:index === idx}]' @click="$router.push(item.push)">
            <img :src="index===idx?item.iconSelect:item.icon">
            <p :class="['colorChange',{on:index===idx}]" >
                {{item.name}}</p>
        </div>

    </div>
</template>

<script>
    import img_home from '../assets/icon/home.png'
    import img_home_selected from '../assets/icon/home_selected.png'
    export default{
        props:['idx'],
        data(){
            return {
                items:[{
                    cls:"home",
                    name:"首页",
                    push:"/",
                    icon:img_home,
                    iconSelect:img_home_selected
                },
                    {
                        cls:"shares",
                        name:"文件",
                        push:"/shares",
                        icon:"../static/home.png",
                        iconSelect:"../static/home_select.png"
                    },
                    {
                        cla:"community",
                        name:"公告",
                        push:"/community",
                        icon:"../static/home.png",
                        iconSelect:"../static/home_select.png"
                    },
                    {
                        cla:"mine",
                        name:"我的",
                        push:"/mine",
                        icon:"../static/home.png",
                        iconSelect:"../static/home_select.png"
                    }]
            }
        }
    }

</script>
<style>
    .footer {
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
        background: rgb(248, 248, 248);
        width: 100%;
    }

    div {
        flex: 1;
        padding: 5px;
    }

    div img {
        width: 30px;
        height: 30px;
    }

    div span {
        display: block;
        color: black;
        color: rgb(168, 168, 168);
    }

    .on {
        color: rgb(25, 137, 250);
    }

</style>
