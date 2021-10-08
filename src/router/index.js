import {createRouter, createWebHashHistory} from 'vue-router'
import home from '../views/home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/1v-bind',
        name: 'TEST',
        component: () => import( '../views/1v-bind.vue')
    }, {
        path: '/file',
        name: 'file',
        component: () => import( '../views/file.vue')
    },{
        path: '/user',
        name: 'user',
        component: () => import( '../views/user.vue')
    },
    {
        path: '/2class_style_bind',
        name: 'TEST2',
        component: () => import( '../views/2class_style_bind.vue')
    },
    {
        path: '/3v-if',
        name: 'TEST3',
        component: () => import( '../views/3v-if.vue')
    },
    {
        path: '/4v-for',
        name: 'TEST4',
        component: () => import( '../views/4v-for.vue')
    },
    {
        path: '/4.2v-for',
        name: 'TEST4.2',
        component: () => import( '../views/4.2v-for.vue')
    },
    {
        path: '/5v-on',
        name: 'TEST5',
        component: () => import( '../views/5v-on.vue')
    },
    {
        path: '/6event_modifier-keyboards_event',
        name: 'TEST6',
        component: () => import( '../views/6event_modifier-keyboards_event.vue')
    },
    {
        path: '/7.3computed-watch',
        name: 'TEST7',
        component: () => import( '../views/7.3computed-watch.vue')
    },
    {
        path: '/7.1watch',
        name: 'TEST7.1',
        component: () => import( '../views/7.1watch.vue')
    }, ,
    {
        path: '/7.2deep_watch',
        name: 'TEST7.2',
        component: () => import( '../views/7.2deep_watch.vue')
    },
    {
        path: '/8v-model',
        name: 'TEST8',
        component: () => import( '../views/8v-model.vue')
    },
    {
        path: '/9mvvm',
        name: 'TEST9',
        component: () => import( '../views/9mvvm.vue')
    },
    {
        path: '/10object_define_property',
        name: 'TEST10',
        component: () => import( '../views/10object_define_property.vue')
    },
    {
        path: '/11data_proxy',
        name: 'TEST11',
        component: () => import( '../views/11data_proxy.vue')
    },
    {
        path: '/12watch_data_change',
        name: 'TEST12',
        component: () => import( '../views/12watch_data_change.vue')
    },
    {
        path: '/8.2v-model-form',
        name: 'TEST8.2',
        component: () => import( '../views/8.2v-model-form.vue')
    },
    {
        path: '/13filter',
        name: 'TEST13',
        component: () => import( '../views/13filter.vue')
    },
    {
        path: '/14build_in_command',
        name: 'TEST14',
        component: () => import( '../views/14build_in_command.vue')
    },
    {
        path: '/15user_defined_command',
        name: 'TEST15',
        component: () => import( '../views/15user_defined_command.vue')
    },
    {
        path: '/16vue-lifecycle',
        name: 'TEST16',
        component: () => import( '../views/16vue-lifecycle.vue')
    },
    {
        path: '/16.2vue-lifecycle',
        name: 'TEST16.2',
        component: () => import( '../views/16.2vue-lifecycle.vue')
    },
    {
        path: '/17vue-component',
        name: 'TEST17',
        component: () => import( '../views/17vue-component.vue')
    },
    {
        path: '/18vue-cli',
        name: 'TEST18',
        component: () => import( '../views/18vue-cli.vue')
    },
    {
        path: '/19todo-list',
        name: 'TEST19',
        component: () => import( '../views/19todo-list.vue')
    },
    {
        path: '/20browser-storage',
        name: 'TEST20',
        component: () => import( '../views/20browser_storage.vue')
    },
    {
        path: '/21github',
        name: 'TEST21',
        component: () => import( '../views/21github.vue')
    },
];  

const router = createRouter({
    mode: 'hash',
    history: createWebHashHistory(),
    base: process.env.BASE_URL,
    routes,
});

export default router
