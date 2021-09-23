<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <h1>数据代理</h1>
        <img alt="Vue logo" src="../assets/1631094244.jpg" class="img-responsive">

    </div>
</template>
<script>
    let person={name:'chen'}
    let person2={}
    Object.defineProperty(person2,'name',{
        get(){/*当有人读取person的number属性时，get函数会调用*/
            return person.name;
        },
        set(value){/*当有人修改person的number属性是，set会调用，切会收到值*/
            person.name=value
        }
    })



</script>
<style>
    .img-responsive {
        display: inline-block;
        height: auto;
        max-width: 100%;
    }
</style>
