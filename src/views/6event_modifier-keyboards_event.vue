<template>
    <!--template 下只能有一个子元素-->
    <div>
        <top-nav-bar></top-nav-bar>

        <h1>事件修饰符和键盘事件</h1>

        <ol>
            <li>prevent：阻止默认事件</li>
            <li>stop：组织事件冒泡</li>
            <li>once：事件触发一次</li>
            <li>capture：使用事件的捕获模式,先捕获从外到内 后冒泡从内到外</li>
            <li>self：见有event.target是当前操作的元素时才触发事件</li>
            <li>passive：事件的默认行为立即执行，无需等待事件回调执行完毕</li>
            <li>修饰符可以多个</li>
        </ol>
        <ol>
            <li>回车 enter</li>
            <li>删除 delete 捕获 delete 跟 backspace</li>
            <li>退出 esc</li>
            <li>空格 space</li>
            <li>换行 tab 必须配合keydown使用</li>
            <li>上 up</li>
            <li>下 down</li>
            <li>左 left</li>
            <li>右 right</li>
            <li>vue未提供他别名的按键，可以使用按键原始的key值去绑定，但需要注意转为word1-word2的短横线命名</li>
            <li><h3>系统修饰键ctrl、alt、shift、meta</h3>
                <h3>配合keyup使用：按下修饰键同时，再按下其他键、随后释放其他键、事件才触发</h3>
                <h3>配合keydown使用：正常触发</h3>
            </li>
            <li>vue.config.ketCodes.自定义键名=键码，可以去定制按键别名（不推荐）</li>

        </ol>

        <div @click="fatherClick">
            父级
            <div @click="subClick1">子级1</div>
            <!--阻止冒泡-->
            <div @click.stop="subClick2">子级2</div>
            <!--阻止默认事件-->
            <hr>
            <div @click.right.prevent="rightClick">点击右键</div>
            <hr>
            <a href="https://www.baidu.com" @click.stop.prevent='rightClick'>点我即阻止冒泡也阻止默认事件</a>
            <br>
            <a href="https://www.baidu.com" @click='rightClick'>点我啥也不阻止</a>
            <hr>
            <button @click.once='alertMsg1(0)'>点我触发一次</button>

        </div>
        <hr>

        <!--self修饰符-->
        <div @click.self="fatherClick">
            父级
            <div @click="subClick2">子级2</div>
        </div>

        <hr>

        <div class="box1" @click.capture="alertMsg1(1)">
            div1
            <div class="box2" @click="alertMsg1(2)">
                div2
            </div>
        </div>

        <input type="text" @keydown.ctrl="ctrlEvent">
        <hr>
        <input type="text" @keydown.enter="enterEvent">
        <hr>
        <input type="text" @keydown.delete.prevent="deleteEvent">
        <hr>
        <input type="text" @keydown.space.prevent="spaceEvent">
        <hr>
        <input type="text" @keydown.enter="showInputValue" placeholder="按下回车显示输入">
        <hr>
        <input type="text" @keydown.caps-lock="showInputValue" placeholder="按下CapsLock显示输入">
        <hr>
        <input type="text" @keydown.tab="showInputValue" placeholder="按下Tab显示输入">

        <hr>
        <input type="text" @keyup.ctrl="showInputValue" placeholder="按下ctrl显示输入">

        <hr>

        <input type="text" @keyup.ctrl.y="showInputValue" placeholder="按下ctrl y 才会显示输入">


        <ul class="list" @scroll="scroll"><!--针对滚动条滚动 包括鼠标滚轮跟键盘 滚到底部不会触发-->
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
        <ul class="list" @wheel.passive="scroll2"><!--针对鼠标滚轮 只要滚轮滚动就触发-->
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>


    </div>
</template>
<script>
    export default {
        name: "test2",
        data() {
            return {}
        },
        methods: {
            fatherClick() {
                console.log('fatherClick click')
            },
            subClick1() {
                console.log('subClick1 click')
            },
            subClick2() {
                console.log('subClick2 click')
            },
            rightClick() {
                console.log('rightClick click')
            }, ctrlEvent() {
                console.log('ctrlEvent pressed')
            }, enterEvent() {
                console.log('enterEvent pressed')
            }, deleteEvent() {
                console.log('deleteEvent pressed')
            }, spaceEvent() {
                console.log('spaceEvent pressed')
            }, alertMsg1(val) {
                alert('alert msg' + val)
            }, scroll() {
                console.log('scroll')
            }, scroll2() {
                for (let i = 0; i < 100; i++) {
                    console.log(i)
                }
            }, showInputValue(event) {
                console.log(event.keyCode)
                console.log(event.key)
                alert(event.target.value)
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
    .box1 {
        padding: 5px;
        background-color: #42b983;
    }

    .box2 {
        padding: 5px;
        background-color: aqua;
    }

    .list {
        width: 200px;
        height: 200px;
        background-color: bisque;
        overflow: auto;
    }

    ul li {
        height: 100px;
    }

     ol {
        text-align: left;
        font-size:20px;
        color: red;
        font-style: italic;
        border: 4px solid bisque;
    }
</style>
