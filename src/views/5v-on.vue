<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>


        <h1>v-on 事件绑定</h1>
        <ol>
            <li>使用v-on：xxx或@xxx绑定事件，其中xxx是事件名</li>
            <li>事件的回调需要配置在methods对象中，最终会在vm上</li>
            <li>method中配置的函数 不需要箭头函数 否则this就不是vm了</li>
            <li>method中配置的函数 都是被vue所管理的函数，this的指向是vm或组件实例对象</li>
            <li>@click='demo'跟@click='demo($event)'效果一致，但后者可以传参</li>
        </ol>
        <hr>
        <div>{{number}}</div>
        <button v-on:click="add">加1</button>
        <button @click="reduce">减1</button>
        <button @click="reset(0)">reset</button>
        <!-- 传递第一个参数默认为event-->
        <button @click="reduce($event,2)">减2</button>

        <hr>

        <div v-if="isShow">isShow为true</div>
        <button @click="toggle()">显示/隐藏</button>
        <hr>

        <ul :style="style1">
            <li v-for="(item,index) in newsList" :key="item.id">
                {{index}}--{{item.id}}--{{item.title}}
            </li>
        </ul>
        <button @click="addNew()">增加新闻</button>
        <button @click="deleteNew()">删除新闻</button>
        <button @click="editNew()">修改第一条新闻</button>
        <button @click="insertFirst()">插入第一条新闻</button>
        <hr>
        <div v-for="(value,key,index) in obj" :key="key">
            索引：{{index}} - 键：{{key}} - 值：{{value}}
        </div>
        <button @click="addAttr()">添加属性</button>
        <button @click="deleteAttr()">删除属性</button>
        <button @click="editAttr()">修改属性</button>
    </div>
</template>
<script>
    export default {
        name: "test2",
        data() {
            console.log('~~~~', this)
            return {
                number: 1,
                isShow: true,
                newsList: [
                    {
                        id: 1,
                        title: '教师节临近，警惕“众筹送礼”污染家校关系',
                    }, {
                        id: 2,
                        title: '俄罗斯电影周”开幕，助力中俄文化交流',
                    }, {
                        id: 3,
                        title: '巡视组出场之际，你还在搞“凭房入学”？',
                    }, {
                        id: 4,
                        title: '中国残奥运动员：自强不息 奋斗有我',
                    }, {
                        id: 5,
                        title: '坚持科学溯源 抵制政治病毒',
                    },
                ],
                style1: {
                    textAlign: 'left'
                },
                obj: {
                    name: '张三',
                    age: 20,
                    sex: '男',
                    phone: 1533669090,
                    id: 140107198811071759
                }
            }
        },
        methods: {
            add(event) {
                console.log(event)
                this.number++;
            },
            reduce(event, val) {
                console.log(event)
                console.log(val)
                if (typeof val === 'undefined')
                    this.number--;
                else
                    this.number -= val
            },
            reset(val) {
                this.number = val;
            },
            toggle() {
                this.isShow = !this.isShow;
            },
            addNew() {
                this.newsList.unshift(
                    {
                        id: this.newsList.length + 1,
                        title: Date.now() + '一条新新闻'
                    }
                )
            },
            deleteNew() {
                this.newsList.shift()
            },
            editNew() {
                this.newsList[0].title = '修改第一条新闻title成功'
            },
            insertFirst() {
                this.newsList.splice(0, 1, {
                    id: this.newsList.length + 1,
                    title: Date.now() + '插入第一条新新闻'
                })

            },
            addAttr() {
                /*此方法无效*/
                this.obj.hobby='吃饭睡觉 打豆豆'
                this.obj = {
                    ...this.obj,
                    hobby: '吃饭睡觉打豆豆'
                }
            },
            deleteAttr() {
                let _obj = {...this.obj}
                delete _obj.age
                this.obj = {..._obj}
            },
            editAttr() {
                this.obj.hobby = '吃饭睡觉打豆豆吃饭睡觉打豆豆'
            }
        },
        mounted() {
            /*钩子函数*/
            setTimeout(() => {

            }, 1500)
        }
    }
</script>
<style scoped>
     ol {
        text-align: left;
        font-size:20px;
        color: red;
        font-style: italic;
        border: 4px solid bisque;
    }
</style>
