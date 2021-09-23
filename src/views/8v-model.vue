<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <h1>双向绑定v-model</h1>
        <ol>
            <li>当data里的任何数据发生了改变 该模板会重新加载 所有data用到的地方重新赋值 methods里的方法会一直被调用
                computed方法会缓存 只有当第一次读取computed属性或者所依赖的属性发生变化才会加载
            </li>
            <li>
                计算属性 不存在data中，需要通过已有的data属性计算的来
            </li>
            <li>
                底层借助了object.defineProperty提供的getter和setter
            </li>
            <li>
                get什么时候调用
                * 初次读取fullname2时候会调用
                * 所依赖的数据发生变化时候 会调用
            </li>

        </ol>
        <h3>姓名实例插值语法</h3>
        firstname <input type="text" v-model="firstname">
        lastname <input type="text" v-model="lastname">
        <div>{{firstname.slice(0,3)}}{{lastname}}</div>
        <hr>
        <h3>姓名实例methods语法</h3>
        firstname <input type="text" v-model="firstname1">
        lastname <input type="text" v-model="lastname1">
        <div>{{fullname()}}</div>
        <hr>
        <h3>姓名实例计算属性语法</h3>
        firstname <input type="text" v-model="firstname2">
        lastname <input type="text" v-model="lastname2">
        <div>{{fullname2}}</div>
        <hr>
        <input type="text" v-model="text1">
        <div>{{text1}}</div>
        <hr>
        <textarea v-model="textarea1" rows="6" cols="50"></textarea>
        <div>{{text}}</div>
        <div>{{textarea1}}</div>
        <hr>
        <select v-model="cityCode">
            <option v-for="(value,index) in city" :key="value.code" :value="value.code">
                {{value.code}}--{{value.name}}
            </option>
        </select>
        <div>{{cityCode}}</div>
        <div>{{cityName}}</div>
        <hr>
        <input type="radio" name='sex' value="male" v-model="sex"> M
        <input type="radio" name='sex' value="female" v-model="sex"> F
        <div>{{sex}}</div>
        <hr>
        <input type="checkbox" v-model="rememberPass">
        <div>{{rememberPass}}</div>
        <hr>
        <input type="checkbox" v-model="rememberPass2" true-value="YES" false-value="NO">
        <div>{{rememberPass2}}</div>
        <hr>
        <input type="checkbox" v-model="hobby" name="hobby" value="1"> eat
        <input type="checkbox" v-model="hobby" name="hobby" value="2"> sleep
        <input type="checkbox" v-model="hobby" name="hobby" value="3"> walk
        <input type="checkbox" v-model="hobby" name="hobby" value="4"> run
        <input type="checkbox" v-model="hobby" name="hobby" value="5"> game
        <input type="checkbox" v-model="hobby" name="hobby" value="6"> tv
        <div>{{hobby.join(',')}}</div>
        <hr>
        <!--v-model修饰符-->
        <!--lazy 失去焦点时候更新-->
        <input type="text" v-model.lazy="text1">
        <div>{{text1}}</div>
        <!--trim -->
        <input type="text" v-model.trim="text1">
        <div>{{text1}}</div>


    </div>
</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                firstname: '陈',
                lastname: '三',
                firstname1: '陈',
                lastname1: '三',
                firstname2: '陈',
                lastname2: '三',
                text1: 'abc',
                cityCode: '',
                sex: 'male',
                number1: 123,
                rememberPass: 'true',
                rememberPass2: '',
                hobby: [],
                textarea1: 'sdi asod noasd aosnid懂爱动脑难道是',
                city: [
                    {
                        name: '北京',
                        code: 'bj'
                    }, {
                        name: '上海',
                        code: 'sh'
                    }, {
                        name: '深圳',
                        code: 'sz'
                    }, {
                        name: '东京',
                        code: 'dj'
                    }
                ]
            }
        },
        methods: {
            fullname() {
                console.log('@----')
                return this.firstname1 + ' ' + this.lastname1;
            }
        },
        watch: {},
        mounted() {
            /*钩子函数*/
            setTimeout(() => {
            }, 1500)
        },
        computed: {
            /*计算属性简写形式 不考虑修改setter 只有getter*/
            cityName() {
                let _city = this.city.find(c => c.code === this.cityCode)
                return _city ? _city.name : ''
            },
            fullname2: {
                /*get什么时候调用
                * 初次读取fullname2时候会调用
                * 所依赖的数据发生变化时候 会调用
                * */
                get() {
                    return this.firstname2 + this.lastname2;
                }, set(val) {
                    let arr = val.split(' ')
                    this.firstname2 = arr[0]
                    this.lastname2 = arr[1]
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
