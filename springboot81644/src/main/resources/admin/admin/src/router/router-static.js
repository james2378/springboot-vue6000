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
    import tiwenzhuangtai from '@/views/modules/tiwenzhuangtai/list'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import xiujiashenqing from '@/views/modules/xiujiashenqing/list'
    import discussyiqingzhishi from '@/views/modules/discussyiqingzhishi/list'
    import yiqingzhishi from '@/views/modules/yiqingzhishi/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import chat from '@/views/modules/chat/list'
    import churudengji from '@/views/modules/churudengji/list'
    import hesuanjiance from '@/views/modules/hesuanjiance/list'
    import xueshengzhuangtai from '@/views/modules/xueshengzhuangtai/list'
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
	path: '/tiwenzhuangtai',
        name: '体温状态',
        component: tiwenzhuangtai
      }
          ,{
	path: '/forum',
        name: '论坛管理',
        component: forum
      }
          ,{
	path: '/news',
        name: '疫情公告',
        component: news
      }
          ,{
	path: '/xiujiashenqing',
        name: '休假申请',
        component: xiujiashenqing
      }
          ,{
	path: '/discussyiqingzhishi',
        name: '疫情知识评论',
        component: discussyiqingzhishi
      }
          ,{
	path: '/yiqingzhishi',
        name: '疫情知识',
        component: yiqingzhishi
      }
          ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
          ,{
	path: '/chat',
        name: '客服管理',
        component: chat
      }
          ,{
	path: '/churudengji',
        name: '出入登记',
        component: churudengji
      }
          ,{
	path: '/hesuanjiance',
        name: '核酸检测',
        component: hesuanjiance
      }
          ,{
	path: '/xueshengzhuangtai',
        name: '学生状态',
        component: xueshengzhuangtai
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
