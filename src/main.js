// 入口文件
import Vue from "vue"

import VueRouter from "vue-router"
Vue.use(VueRouter)



// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
  // 设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})



//导入mint-ui
import MintUi from "mint-ui"


//从mint-UI中导入头部
import {Header} from "mint-ui"
Vue.component(Header.name,Header)

//导入mui
import "./lib/mui/css/mui.min.css"

// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件   
import {Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//mint-ui导入button
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);


import app from "./App.vue"

//导入自己的router.js路由模块
import router from "./router.js"

var vm=new Vue({
	el:"#app",
	render:c=>c(app),
	router
})