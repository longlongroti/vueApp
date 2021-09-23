<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <h1>计算和侦听属性</h1>
        <!--表达式复杂的话会导致模板难以维护，
        而且如果多个地方使用该表达式的话则会导致重复-->
        <div>{{type +' :'+ msg}}</div>
        <!--使用computed计算属性-->
        <div>{{type_msg}}</div>
        <hr>
        <div>{{firstName}}</div>
        <div>{{lastName}}</div>
        <div>{{middleName}}</div>
        <div>{{fullName}}</div>
        <hr>

        <div>{{fullName2}}</div>
        <button @click="editFullName">修改fullname</button>

        <hr>
        <!--不推荐使用，因为dom更新的时候
        computed可以缓存
        而通过函数每次都会反复调用 性能较低-->
        <div>{{getFullName()}}</div>

        <hr>
        <div>{{fullName3}}</div>
        <div>{{lastName2}}</div>
        <div>{{firstName2}}</div>


        <button @click="editLastName2">修改 lastName2</button>
        <button @click="editFirstName2">修改 firstName2</button>
        <hr>
    </div>


    <!--computed使用场景，某个数据受多个数据影响、需要对其他数据进行js处理在显示
        watch使用场景，一个数据的变化影响多个数据，一个数据变化需要使用异步操作
    -->
    <div>现在的语言{{language}}</div>
    <button @click="swap($event,'chinese')">language chinese</button>
    <button @click="swap($event,'english')">language english</button>
    <div>{{zhangsan}}</div>
    <div>{{lisi}}</div>
</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                type: 1,
                msg: '哈桑都会',
                firstName: 'Allen',
                middleName: 'DC',
                lastName: 'Andrew',
                lastName2: '陈阿萨',
                firstName2: '代收费',
                zhangsan: '',
                lisi: '',
                language: 'chinese'
            }
        },
        methods: {
            getFullName() {
                return this.firstName + ' ' + this.middleName + ' ' + this.lastName
            }, editFullName() {
                this.fullName2 = 'Michel OA Jordan'
            }, editLastName2() {
                this.lastName2 = '龙龙'
            }, editFirstName2() {
                this.firstName2 = '陈'
            }, swap(event, val) {
                console.log(val)
                this.language = val;
            }
        },
        watch: {
            /*一般用于监听路由*/
            firstName2(val) {
                this.fullName3 = val + this.lastName2
            },
            lastName2(val) {
                this.fullName3 = this.firstName2 + val
            },
            // language(val) {
            //     if (val === 'chinese') {
            //         this.zhangsan = '张三'
            //         this.lisi = '李四'
            //     } else {
            //         this.zhangsan = 'zhang san'
            //         this.lisi = 'lisi'
            //     }
            // }
            language: {
                handler(val) {
                    if (val === 'chinese') {
                        this.zhangsan = '张三'
                        this.lisi = '李四'
                    } else {
                        this.zhangsan = 'zhang san'
                        this.lisi = 'lisi'
                    }
                },
                /*加载后立马执行*/
                immediate:true
            }
        },
        mounted() {
            /*钩子函数*/
            setTimeout(() => {

            }, 1500)

        }, computed: {
            type_msg() {
                return this.type + '-' + this.msg;
            },
            fullName() {
                return this.firstName + ' ' + this.middleName + ' ' + this.lastName
            }, fullName3() {
                return this.firstName2 + ' ' + this.lastName2
            },
            fullName2: {
                get() {
                    return this.firstName + ' ' + this.middleName + ' ' + this.lastName
                },
                set(value) {
                    let arr = value.split(' ')
                    this.firstName = arr[0]
                    this.middleName = arr[1]
                    this.lastName = arr[2]
                }
            }
        }
    }
</script>
<style>
    ol {
        text-align: left;
    }
</style>
