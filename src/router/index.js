import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewUsers from './../views/ViewUsers';
import ViewUserDetail from './../views/ViewUserDetail';
import ViewUserPosts from './../views/ViewUserPosts';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'users',
    component: ViewUsers,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: ViewUserDetail,
    children: [
      {
        path: 'posts',
        name: 'user_posts',
        component: ViewUserPosts,
      },
    ]
  },
  {
    path: '*',
    redirect: '/',
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router;