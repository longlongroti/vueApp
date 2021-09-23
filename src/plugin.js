export const myJs ={
    methods:{
        alertName(){
            alert(this.name)
        }
    }
}

export const myConstant={
    data() {
        return {
            a:'1',
            b:2
        }
    },
}
/*
* 可以把多个组件公用的配置提取成一个混入对象
* 第一步 定义混入
* {
*   data(){},
*   method(){}
* }
*
* 第二步 引入混入
* 全局混入: app.mixin(xx)
* 局部混入: mixins:['xx']
* */
