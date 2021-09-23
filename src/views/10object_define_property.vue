<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <top-nav-bar></top-nav-bar>

        <h1>object define property</h1>
    </div>
</template>
<script>


    let person={name:'chen',age:1}
    Object.defineProperty(person,'address',{
        value:'tokyo'
    })
    console.log(Object.keys(person))
    Object.defineProperty(person,'address2',{
        value:'hawaki',
        enumerable:true,/*控制属性是否可以枚举*/
        writable:true,/*控制属性是否可以被修改*/
        configurable:true/*控制属性是否可以被删除*/
    })
    console.log(Object.keys(person))


    let number =10
    let person2={name:'allen',age:2}
    Object.defineProperty(person2,'number',{
        get(){/*当有人读取person的number属性时，get函数会调用*/
            return number;
        },
        set(value){/*当有人修改person的number属性是，set会调用，切会收到值*/
            console.log('data changed'+value)
            number=value
        }
    })

    console.log(person2)

    setTimeout(() => {
        person2.number=13
        console.log(person2)

    }, 3500)

</script>
<style>

</style>
