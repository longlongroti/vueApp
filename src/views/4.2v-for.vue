<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <h1>v-for 遍历数组</h1>
        <!--需要绑定唯一的key key的作用主要是为了高效的更新虚拟DOM-->
        <!--遍历数组-->
        <ol>
            <li>v-for用于列表数据展示</li>
            <li>语法v-for='(value,index) in arr' :key='index'</li>
            <li>语法v-for='(value,index) in str' :key='index'</li>
            <li>语法v-for='(value,index) in 3' :key='index'</li>
            <li>语法v-for='(value,key,index) in obj' :key='index'</li>
            <li>可遍历数组，对象，字符串，指定次数</li>
        </ol>
        <ol>

        </ol>

        <img alt="Vue logo" src="../assets/1631238890.jpg" class="img-responsive">
        <img alt="Vue logo" src="../assets/1631239459.jpg" class="img-responsive">
        <img alt="Vue logo" src="../assets/1631239924.jpg" class="img-responsive">


        <hr>
        <div v-for="item in arr">{{item}}</div>
        <hr>
        <div v-for="num of arr">{{num*num}}</div>
        <hr>
        <div v-for="(num,index) in arr">{{'索引值:'+index+' 实际值为:'+num}}</div>
        <hr>
        遍历数组
        <div v-for="(num,index) in arr" :key="index">索引值{{index}} 实际值为{{num}}</div>
        <hr>
        遍历字符串
        <div v-for="(item,index) in str" :key="index">索引值{{index}} 实际值为{{item}}</div>
        <hr>
        遍历指定次数
        <div v-for="(item,index) in 4" :key="index">索引值{{index}} 实际值为{{item}}</div>

        <!--遍历对象-->
        <hr>
        遍历对象
        <div v-for="(attrValue,attrName,index) in obj" :key="index">索引值：{{index}} 属性：{{attrName}} 属性值：{{attrValue}}
        </div>
        <hr>
        <ul :style="{textAlign:'left'}">
            <li v-for="(item,index) in newsList" :key="item.id">
                索引值：{{index}} 值{{item.id}}---{{item.title}}
            </li>
        </ul>
    </div>

</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                str: 'dasudhiausd',
                arr: [1, 2, 3, 4, 5, 6, 7],
                obj: {
                    name: '车弄',
                    age: 20,
                    gender: '男',
                    country: '中国',
                    phone: '1533669090'
                },
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
                ]
            }
        },
        mounted() {
            /*钩子函数*/
            setTimeout(() => {

            }, 1500)
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
     .img-responsive {
         display: inline-block;
         height: auto;
         max-width: 100%;
     }
</style>
