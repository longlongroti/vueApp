<template>
    <div class="footer">
        <div :class='[item.cls,{on:index === idx}]' @click="$router.push(item.push);idx=index"
             v-for='(item,index) of items'>
            <img :src="index===idx?item.iconSelect:item.icon">
        </div>
    </div>
</template>

<script>
    import img_home from '../assets/icon/home.png'
    import img_home_selected from '../assets/icon/home_selected.png'
    import img_file from '../assets/icon/file.png'
    import img_file_selected from '../assets/icon/file_selected.png'
    import img_user from '../assets/icon/user.png'
    import img_user_selected from '../assets/icon/user_selected.png'

    export default {
        /*简单接受*/
        // props: ['idx'],
        /*接受时候对数据进行类型限制*/
        // props: {
        //     idx:Number
        // },
        /*限制类型、限制必要性、指定默认值*/
        /*props是只读的，vue底层会检测你对prop的修改，如果进行了修改，就回报错，若业务需求确实需要修改，
        * 那么请赋值props的内容到data中一份，然后去修改data中的数据
        * */
        props:{
            idx:{
                type:Number,
                required: false,
                default:0
            }
        },
        data() {
            return {
                items: [{
                    cls: "home",
                    name: "首页",
                    push: "/",
                    icon: img_home,
                    iconSelect: img_home_selected
                }, {
                    cls: "file",
                    name: "文件",
                    push: "/file",
                    icon: img_file,
                    iconSelect: img_file_selected
                }, {
                    cla: "user",
                    name: "我的",
                    push: "/user",
                    icon: img_user,
                    iconSelect: img_user_selected
                }]
            }
        }
    }

</script>
<style scoped>
    .footer {
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
        background: rgb(248, 248, 248);
        width: 100%;
        z-index: 999;
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
