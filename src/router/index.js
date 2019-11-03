import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/pages/Layout/Layout.vue';//
import Login from '@/pages/Login/index.vue';//登录
import Error404 from '@/pages/error404.vue';//页面404
import Home from '@/pages/Home/index.vue';//首页

import GoodsList from '@/pages/Goods/GoodsList.vue';//商品列表
import GoodsListSetting from '@/pages/Goods/GoodsListSetting.vue';//商品添加/编辑
import GoodsCategory from '@/pages/Goods/GoodsCategory.vue';//商品分类
import GoodsCategorySetting from '@/pages/Goods/GoodsCategorySetting.vue';//商品分类:新增/编辑分类
import BrandList from '@/pages/Goods/BrandList.vue';//品牌列表
import BrandListSetting from '@/pages/Goods/BrandListSetting.vue';//品牌列表：新增/编辑列表
import GoodsType from '@/pages/Goods/GoodsType.vue';//商品类型
import GoodsTypeAttr from '@/pages/Goods/GoodsTypeAttr.vue';//商品类型：属性列表

import OrderList from '@/pages/Order/OrderList.vue';//订单列表
import OrderDetail from '@/pages/Order/OrderDetail.vue';//订单详情
import OrderSetting from '@/pages/Order/OrderSetting.vue';//订单设置

import UserList from '@/pages/Users/UserList.vue';//用户列表
import UserDetail from '@/pages/Users/UserDetail.vue';//用户详情

import Integral from '@/pages/Activity/Integral.vue';//积分
import IntegralType from '@/pages/Activity/IntegralType.vue';//积分类型
import IntegralList from '@/pages/Activity/IntegralList.vue';//积分列表
import Promote from '@/pages/Activity/Promote.vue';//限时免费疯狂抢
import PictureArea from '@/pages/Activity/PictureArea.vue';//幸福晒图区
import PictureDetaill from '@/pages/Activity/PictureDetaill.vue';//幸福晒图区详情

Vue.use(VueRouter);
/**
 * 配置页面路由
 */

const newRouter = new VueRouter({
  mode: 'history',// //分为 hash 和 history
  scrollBehavior: () => ({ y: 0 }),//跳转页面的时候，让页面滚动到顶部
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'Login',
      hidden: true,
      meta: { title: '登录' },//路由元信息
    }, {
      path: '/404',
      component: Error404,
      name: 'Error404',
      hidden: true,
      meta: { title: '404' },//路由元信息
    }, {
      path: '/',
      redirect: '/home',
      component: Layout,
      meta: { title: '首页' },
      children: [
        {
          path: '/home',
          component: Home,
          name: 'home',
          meta: { title: '首页', icon: 'home' },
        },
      ]
    }, {
      path: '/goods',
      component: Layout,
      name: 'goods',
      meta: { title: '商品', icon: 'product' },
      children: [
        {
          path: '/goods/list',
          component: GoodsList,
          name: 'GoodsList',
          meta: { title: '商品列表', icon: 'product-list' },
        }, {
          path: '/goods/list/set',
          component: GoodsListSetting,
          name: 'GoodsListSetting',
          meta: { title: '商品设置', icon: 'product-recycle' },
        }, {
          path: '/goods/brand/list',
          component: BrandList,
          name: 'BrandList',
          meta: { title: '品牌列表', icon: 'product-brand' },
        }, {
          path: '/goods/brand/list/set',
          component: BrandListSetting,
          name: 'BrandListSetting',
          meta: { title: '品牌设置', icon: 'product-recycle' },
        }, {
          path: '/goods/category',
          component: GoodsCategory,
          name: 'GoodsCategory',
          meta: { title: '商品分类', icon: 'product-cate' },
        }, {
          path: '/goods/category/set',
          component: GoodsCategorySetting,
          name: 'GoodsCategorySetting',
          meta: { title: '分类设置', icon: 'product-recycle' },
        }, {
          path: '/goods/type',
          component: GoodsType,
          name: 'GoodsType',
          meta: { title: '商品类型', icon: 'product-attr' },
        }, {
          path: '/goods/type/attr',
          component: GoodsTypeAttr,
          name: 'GoodsTypeAttr',
          meta: { title: '商品属性', icon: 'product-recycle' },
        },
      ]
    }, {
      path: '/order',
      component: Layout,
      name: 'order',
      meta: { title: '订单', icon: 'product-list' },
      children: [
        {
          path: '/order/list',
          component: OrderList,
          name: 'OrderList',
          meta: { title: '订单列表', icon: 'product-recycle' },
        }, {
          path: '/order/list/detail',
          component: OrderDetail,
          name: 'OrderDetail',
          meta: { title: '列表详情', icon: 'product-recycle' },
        }, {
          path: '/order/set',
          component: OrderSetting,
          name: 'OrderSetting',
          meta: { title: '订单设置', icon: 'order-setting' },
        },
      ]
    }, {
      path: '/user',
      component: Layout,
      name: 'user',
      meta: { title: '用户', icon: 'product-recycle' },
      children: [
        {
          path: '/user/list',
          component: UserList,
          name: 'UserList',
          meta: { title: '用户列表', icon: 'product-recycle' },
        }, {
          path: '/user/list/detail',
          component: UserDetail,
          name: 'UserDetail',
          meta: { title: '用户详情', icon: 'product-recycle' },
        },
      ]
    }, {
      path: '/activity',
      component: Layout,
      name: 'activity',
      meta: { title: '营销', icon: 'sms' },
      children: [
        {
          path: '/activity/integral',
          component: Integral,
          name: 'Integral',
          meta: { title: '积分夺宝', icon: 'sms-hot' },

        }, {
          path: '/activity/integral/type',
          component: IntegralType,
          name: 'IntegralType',
          meta: { title: '积分类型', icon: 'sms-new' },
        }, {
          path: '/activity/integral/list',
          component: IntegralList,
          name: 'IntegralList',
          meta: { title: '积分列表', icon: 'sms-ad' },
        }, {
          path: '/activity/promote',
          component: Promote,
          name: 'Promote',
          meta: {
            title: '限时免费疯狂抢', icon: 'sms-subject'
          },
        }, {
          path: '/activity/picture/area',
          component: PictureArea,
          name: 'PictureArea',
          meta: { title: '幸福晒图区' },
        }, {
          path: '/activity/picture/detail',
          component: PictureDetaill,
          name: 'PictureDetaill',
          meta: { title: '晒图详情', icon: 'sms-flash' },
        },
      ]
    },
    {
      path: '*',
      component: Error404,
      name: 'Error404',
      hidden: true,
      meta: { title: '404' },//路由元信息
    },
    //   {
    //     path: '*',
    //     redirect: '/404',
    //     hidden: true
    // },
    /**
     * <!-- 带查询参数，下面的结果为 /register?plan=private -->
    <router-link :to="{ path: 'register', query: { plan: 'private' }}"
      >Register</router-link
    >**/

  ]
});
/**
 * 重写路由的push方法
 */
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error)
// }
export default newRouter;