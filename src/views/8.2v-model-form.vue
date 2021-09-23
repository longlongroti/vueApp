<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>获取表单数据</h1>
        <img alt="Vue logo" src="../assets/img/1631519674.jpg" class="img-responsive"><br><br>

        账号：<input type="text" v-model.trim="account"><br><br>
        密码：<input type="password" v-model="password"><br><br>
        岁数：<input type="text" v-model.number="age"><br><br>
        性别：<input name="sex" type="radio" v-model="sex" value="男">男
        <input name="sex" type="radio" v-model="sex" value="女">女<br>
        爱好：<input name='hobby' type="checkbox" v-model="hobby" value="吃饭">吃饭
        <input name='hobby' type="checkbox" v-model="hobby" value="睡觉">睡觉
        <input name='hobby' type="checkbox" v-model="hobby" value="打豆豆">打豆豆
        <input name='hobby' type="checkbox" v-model="hobby" value="我就是豆豆">我就是豆豆<br>

        学区：
        <select v-model="region">
            <option value="">请选择</option>
            <option value="sh">上海</option>
            <option value="bj">北京</option>
            <option value="sz">深圳</option>
        </select>
        <br>
        其他信息：
        <textarea v-model.lazy="others" rows="6" cols="50"></textarea>
        <hr>

        账号--{{account}}<br>
        密码--{{password}}<br>
        性别--{{sex}}<br>
        岁数--{{age}}<br>

        爱好--
        <ol>
            <li :key="index" v-for="(item,index) in hobby">
                {{item}}
            </li>
        </ol>
        <br>
        学区--{{region}}<br>
        其他--{{others}}<br>
    </div>
</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                account: '',
                password: '',
                sex: '男',
                region: '',
                age: 0,
                others: '',
                hobby: []
            }
        },
        methods: {},
        watch: {},
        mounted() {

        },
        computed: {}
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

</style>
