import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/pages/Layout/Layout.vue';//
import Login from '@/pages/Login/index.vue';//登录
// import Home from '@/pages/Home/index.vue';//首页

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
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'Login',
      meta: { title: '登录' },
    }, {
      path: '/home',
      component: Layout,
      name: 'Layout',
      meta: { title: '首页' },
    }, {

      path: '/goods',
      component: Layout,
      name: 'Layout',
      meta: { title: '商品' },
      children: [
        {
          path: '/goods/list',
          component: GoodsList,
          name: 'GoodsList',
          meta: { title: '商品列表' },
        },
        {
          path: '/goods/list/set',
          component: GoodsListSetting,
          name: 'GoodsListSetting',
          meta: { title: '商品列表设置' },
        },
        {
          path: '/goods/brand/list',
          component: BrandList,
          name: 'BrandList',
          meta: { title: '商品-品牌列表' },
        },
        {
          path: '/goods/brand/list/set',
          component: BrandListSetting,
          name: 'BrandListSetting',
          meta: { title: '商品-品牌-列表-设置' },
        }, {
          path: '/goods/category',
          component: GoodsCategory,
          name: 'GoodsCategory',
          meta: { title: '商品分类' },
        }, {
          path: '/goods/category/set',
          component: GoodsCategorySetting,
          name: 'GoodsCategorySetting',
          meta: { title: '商品-分类-设置' },
        },
        {
          path: '/goods/type',
          component: GoodsType,
          name: 'GoodsList',
          meta: { title: '商品类型' },
        }, {
          path: '/goods/type/attr',
          component: GoodsTypeAttr,
          name: 'GoodsTypeAttr',
          meta: { title: '商品-类型-属性' },
        },



      ]
    }, {

      path: '/order',
      component: Layout,
      name: 'Layout',
      meta: { title: '订单' },
      children: [
        {
          path: '/order/list',
          component: OrderList,
          name: 'OrderList',
          meta: { title: '订单列表' },
        }, {
          path: '/order/list/detail',
          component: OrderDetail,
          name: 'OrderDetail',
          meta: { title: '订单列表详情' },
        }, {
          path: '/order/set',
          component: OrderSetting,
          name: 'OrderSetting',
          meta: { title: '订单设置' },
        },
      ]
    }, {
      path: '/user',
      component: Layout,
      name: 'Layout',
      meta: { title: '用户' },
      children: [
        {
          path: '/user/list',
          component: UserList,
          name: 'UserList',
          meta: { title: '用户列表' },
        }, {
          path: '/user/list/detail',
          component: UserDetail,
          name: 'UserDetail',
          meta: { title: '用户详情' },
        },
      ]
    }, {
      path: '/activity',
      component: Layout,
      name: 'Layout',
      meta: { title: '营销' },
      children: [
        {
          path: '/activity/integral/type',
          component: IntegralType,
          name: 'IntegralType',
          meta: { title: '积分类型' },
        }, {
          path: '/activity/integral/list',
          component: IntegralList,
          name: 'IntegralList',
          meta: { title: '积分列表' },
        }, {
          path: '/activity/promote',
          component: Promote,
          name: 'Promote',
          meta: { title: '积限时免费疯狂抢分类型' },
        }, {
          path: '/activity/picture/area',
          component: PictureArea,
          name: 'PictureArea',
          meta: { title: '幸福晒图区' },
        },
        {
          path: '/activity/picture/detail',
          component: PictureDetaill,
          name: 'PictureDetaill',
          meta: { title: '幸福晒图区详情' },
        },

      ]
    }
    /**
     * <!-- 带查询参数，下面的结果为 /register?plan=private -->
    <router-link :to="{ path: 'register', query: { plan: 'private' }}"
      >Register</router-link
    >**/

  ]
});
export default newRouter;