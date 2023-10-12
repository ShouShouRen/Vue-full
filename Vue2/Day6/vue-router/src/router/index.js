import Vue from "vue";
import VueRouter from "vue-router";
import My from "@/views/My.vue";
import Find from "@/views/Find.vue";
import Friend from "@/views/Friend.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ]
})

export default router