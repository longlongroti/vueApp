<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>数据代理</h1>
        <button @click="student.age++">年龄++</button>
        <button @click="addAttr">添加属性性别男</button>
        <button @click="student.sex='女'">修改性别</button>
        <button @click="addFriend">添加朋友</button>
        <button @click="editFirstFriendName">修改第一个朋友姓名</button>
        <button @click="addHobby">添加一个爱好</button>
        <button @click="editFirstHobby"> 修改第一个爱好为开车</button>


        <hr>
        <h1>{{student.name}}</h1>
        <h1>{{student.age}}</h1>
        <h1>{{student.sex}}</h1>
        <ol>
            <li :key="index" v-for="(h,index) in student.hobby">
                {{h}}
            </li>
        </ol>
        <ol>
            <li :key="student.id" v-for="(h,index) in student.friends">
                {{h.id}}---{{h.name}}---{{h.age}}---{{h.sex}}
            </li>
        </ol>
    </div>
</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                student: {
                    name: 'chen long',
                    age: 13,
                    hobby: ['吃饭', '洗澡', '烫头'],
                    friends: [
                        {id: new Date(), name: '马冬梅', age: 13, sex: "女"},
                        {id: new Date(), name: '马冬梅他爸', age: 33, sex: "男"},
                        {id: new Date(), name: '马冬梅他妈', age: 34, sex: "女"},
                        {id: new Date(), name: '马冬梅他大妈', age: 44, sex: "女"},
                        {id: new Date(), name: '马冬梅他二妈', age: 36, sex: "女"},
                        {id: new Date(), name: '马冬梅他大爷', age: 76, sex: "女"},
                        {id: new Date(), name: '马冬梅他二爷', age: 66, sex: "女"},
                    ]

                }
            }
        },
        methods: {
            addFriend() {
                this.student.friends.unshift({id: new Date(), name: '马冬梅他祖宗的祖宗', age: 13, sex: "女"})
            },addAttr(){
                this.student.sex='男'
                console.log(this)
            },editFirstFriendName(){
                this.student.friends[0].name='修改名字了'
            },addHobby(){
                this.student.hobby.unshift('哇哈哈')
            },editFirstHobby(){
                this.student.hobby[0]='开车'
            }
        }
    }


</script>
<style>

    ol {
         text-align: left;
         font-size:20px;
         color: red;
         font-style: italic;
         border: 4px solid bisque;
     }
</style>
