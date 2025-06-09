import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import gongyingshang from '@/views/modules/gongyingshang/list'
    import dingdanpingjia from '@/views/modules/dingdanpingjia/list'
    import shuiguojinhuo from '@/views/modules/shuiguojinhuo/list'
    import storeup from '@/views/modules/storeup/list'
    import yonghu from '@/views/modules/yonghu/list'
    import shuiguoxinxi from '@/views/modules/shuiguoxinxi/list'
    import chat from '@/views/modules/chat/list'
    import discussshuiguoxinxi from '@/views/modules/discussshuiguoxinxi/list'
    import xiaoshoutongji from '@/views/modules/xiaoshoutongji/list'
    import shuiguofenlei from '@/views/modules/shuiguofenlei/list'
    import orders from '@/views/modules/orders/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '水果资讯',
        component: news
      }
      ,{
	path: '/gongyingshang',
        name: '供应商',
        component: gongyingshang
      }
      ,{
	path: '/dingdanpingjia',
        name: '订单评价',
        component: dingdanpingjia
      }
      ,{
	path: '/shuiguojinhuo',
        name: '水果进货',
        component: shuiguojinhuo
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/shuiguoxinxi',
        name: '水果信息',
        component: shuiguoxinxi
      }
      ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
      ,{
	path: '/discussshuiguoxinxi',
        name: '水果信息评论',
        component: discussshuiguoxinxi
      }
      ,{
	path: '/xiaoshoutongji',
        name: '销售统计',
        component: xiaoshoutongji
      }
      ,{
	path: '/shuiguofenlei',
        name: '水果分类',
        component: shuiguofenlei
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
