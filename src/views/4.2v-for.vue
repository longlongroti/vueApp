<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>v-for列表过滤</h1>
        <ol>
            <input placeholder="输入姓名" type="text" v-model="keyword">
            <button @click="sortType=1">年龄升序</button>
            <button @click="sortType=2">年龄降序</button>
            <button @click="sortType=0">原样</button>
            <li :key="item.id" v-for="(item ,index) in personFilter2">
                {{item.name}}-{{item.age}}-{{item.sex}}
            </li>
        </ol>
    </div>

</template>
<script>
    export default {
        name: "test2",
        data() {
            return {
                keyword: '',
                sortType: 0,
                persons: [
                    {id: '1', name: '马冬梅', age: 13, sex: "女"},
                    {id: '2', name: '马冬梅他爸', age: 33, sex: "男"},
                    {id: '3', name: '马冬梅他妈', age: 34, sex: "女"},
                    {id: '4', name: '马冬梅他大妈', age: 44, sex: "女"},
                    {id: '5', name: '马冬梅他二妈', age: 36, sex: "女"},
                    {id: '6', name: '马冬梅他大爷', age: 76, sex: "女"},
                    {id: '7', name: '马冬梅他二爷', age: 66, sex: "女"},
                ],
                personFilter: []
            }
        },
        // watch: {
        //     keyword: {
        //         handler(newvalue, oldvalue) {
        //             this.personFilter = this.persons.filter((p) => {
        //                 return p.name.indexOf(newvalue) !== -1
        //             })
        //         },
        //         immediate: true
        //     },
        // }
        computed: {
            personFilter2() {
                const arr = this.persons.filter((p) => {
                    return p.name.indexOf(this.keyword) !== -1
                });
                if (this.sortType != '0') {
                    arr.sort((v1, v2) => {
                        return this.sortType === 1 ? v1.age - v2.age : v2.age - v1.age
                    })
                }
                return arr;

            }
        }
    }
</script>
<style scoped>
    ol {
        text-align: left;
        font-size: 20px;
        color: red;
        font-style: italic;
        border: 4px solid bisque;
    }


</style>
