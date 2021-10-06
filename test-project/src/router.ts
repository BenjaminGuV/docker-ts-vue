import Vue from "vue";
import Router from "vue-router";
import Home from './App.vue'
import TodoV from './view/TodoV.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/todo-app',
            name: 'todo-app',
            component: TodoV
        }
    ]
})

/*
const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/index",
    name: "index",
    component: () => import("@/components/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  base: '/',
  routes
});

export default router;*/