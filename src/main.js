/*该文件是整个项目的入口文件*/
/*引入vue*/
import {createApp} from 'vue'
/*引入App他是所有组件的父组件*/
import App from './App.vue'
import router from './router'
import TopNavBar from '@/components/TopNavBar.vue'
import CompSchool from '@/components/comp-school.vue'
import NavBar from '@/components/NavBar.vue'
import {myConstant} from './mixin'
import plugin from "./plugin";
import Vant from 'vant';
import 'vant/lib/index.css';
import { Toast } from 'vant';
import mitt from 'mitt'

/*创建vue实例对象*/
const app = createApp(App);
app.config.globalProperties.$mybus = new mitt()
/*全局指令*/
app.directive('focus2', {
    created(el) {
        el.style.backgroundColor = "bisque"
    },
    inserted(el) {
        el.focus();
    }
});
app.mixin(myConstant);
/*全局注册组件*/
app.component("top-nav-bar", TopNavBar);
app.component("comp-school", CompSchool);
app.component("nav-bar", NavBar);
app.use(plugin);
app.use(Vant)
app.use(Toast);

app.use(router);
app.mount('#app');
