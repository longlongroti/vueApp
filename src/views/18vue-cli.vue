<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>
        <h1>vue cli 脚手架</h1>
        <ol>
            <li>npm config set registry https://registry.npm.taobao.org</li>
            <li>npm install -g @vue/cli</li>
            <li>切换到创建脚手架项目的目录：vue create xxxx</li>
            <li>cd xxxx</li>
            <li>npm run serve</li>
            <li>查看webpack的配置vue inspect >output.js</li>
        </ol>

        <hr>
        <h1 ref="refh1">ref='refh1'
        <ol>
            <li>ref 属性被用来给元素或子组件注册引用信息（id的代替者）</li>
            <li>应用在html标签上获取的是真实dom元素，应用在组件标签上是组件实例对象（vm）</li>
            <li>打标识：h1 ref='xxx'  comp-school ref='xxx'</li>
            <li>获取： this.$refs.xxx</li>
        </ol>
        </h1>
        <comp-school ref="sch"></comp-school>
        <button ref='btn' @click="showDOM">点我输出dom</button>
    </div>
</template>

<script>
    import ComponentA from '@/components/comp-school'
    export default {
        name: "test2",
        components:{
           'comp-school': ComponentA
        },
        data() {
            return {}
        },
        methods: {
            showDOM(){
                console.log(this.$refs.refh1)
                console.log(this.$refs.btn)
                console.log(this.$refs.sch)

            }
        },
        computed: {},
        directives: {},
        components: {},
        beforeCreate() {
            console.log('beforeCreate', this);
            // this.abeforeCreate.push('beforeCreate')
        },
        created() {
            console.log('created');
        },
        beforeMount() {
            console.log('beforeMount');
        },

        /*vue完成模板解析并把初始真实的dom元素放入页面后（挂载完毕）调用mounted*/
        mounted() {
            console.log('mounted');
        },
        beforeUpdate() {
            console.log('beforeUpdate');
        },
        updated() {
            console.log('updated');
        },
        beforeDestroy() {
            console.log('beforeDestroy');
        },
        destroyed() {
            console.log('destroyed');
        }


    }


</script>
<style>


    ol {
        text-align: left;
        font-size: 20px;
        color: red;
        font-style: italic;
        border: 4px solid bisque;
    }

    .img-responsive {
        width: 100%;
        height: 100%;
    }
</style>
