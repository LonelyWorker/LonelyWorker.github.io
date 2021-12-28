// const _import = require('./import-' + process.env.NODE_ENV);
import Layout from '@/views/menu';

const routers = [{
  path: '/',
  name: 'menus',
  component: Layout,
  redirect: '/baseHTML/preface',
  children: [{
      path: 'baseHTML',
      name: 'baseHTML',
      meta: {
        title: 'HTML基础',
        active: false,
      },
      component: () => import('@/views/baseHTML/index.vue'),
      children: [{
        path: 'preface',
        name: 'preface',
        meta: {
          title: '序言',
          active: false,
        },
        component: () => import('@/views/baseHTML/preface/index.vue'),
      }]
    },
    {
      path: 'worldHTML',
      name: 'worldHTML',
      meta: {
        title: 'HTML色彩世界',
        active: false,
      },
      component: () => import('@/views/worldHTML/index.vue'),
    },
    {
      path: 'exploreCss',
      name: 'exploreCss',
      meta: {
        title: '探索Css'
      },
      component: () => import('@/views/exploreCss/index.vue'),
    },
    {
      path: 'worldCss',
      name: 'worldCss',
      meta: {
        title: 'Css色彩世界'
      },
      component: () => import('@/views/worldCss/index.vue'),
    },
    {
      path: 'baseVue',
      name: 'baseVue',
      meta: {
        title: '探索Vue'
      },
      component: () => import('@/views/baseVue/index.vue'),
    },
    {
      path: 'worldVue',
      name: 'worldVue',
      meta: {
        title: 'Vue色彩世界'
      },
      component: () => import('@/views/worldVue/index.vue'),
    },
    {
      path: 'exploreReact',
      name: 'exploreReact',
      meta: {
        title: '探索React'
      },
      component: () => import('@/views/exploreReact/index.vue'),
    },
    {
      path: 'worldReact',
      name: 'worldReact',
      meta: {
        title: 'React色彩世界'
      },
      component: () => import('@/views/worldReact/index.vue'),
    },
  ],
}];


export default routers;
