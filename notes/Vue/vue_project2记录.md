# vue_project2记录

## vite创建项目

创建项目：

```
yarn create vite vue_project2 --template vue
```

安装依赖：

```
cd vue_project2
yarn install
```

启动：

```
yarn dev
```



## 引入ElementPlus

+ 先安装：

```
yarn add element-plus
```

+ 然后引入：

完整引入：会导致打包后的文件偏大

```javascript
//main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app=createApp(App);
app.use(ElementPlus)
app.mount('#app')
```

自动引入：推荐

先安装：

```javascript
npm install -D unplugin-vue-components unplugin-auto-import
```

再引入：

```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

## 引入vue-router

在src文件夹下新建views文件夹（用于存放组件）和router文件夹（用于放路由设置）

+ 复习一下router下index.js的配置：

首先引入createRouter和createWebHashHistory的API:

```javascript
import { createRouter,createWebHashHistory } from "vue-router"
```

路由数组解构：

```javascript
const routes=[
    {
        path:'/',
        component:()=>import('../views/Main.vue'),
        children:[
            {
                path:'/',
                name:'home',
                component:()=>import('../views/home/Home.vue')
            }
        ]
    }
]
```

创建`router`对象并导出：

```javascript
const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
```

按层次在`App.vue`和`Main.vue`中放入\<router-view>

注意这里分两层，一层是根，根下面的children数组是第二层

## 整体布局实现

在ElementUI官网上找到相应布局即可

（下面示例同时展示了\<router-view>位置和布局）

```vue
<!--Main.vue-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
```

```vue
<!--App.vue-->
<template>
  <router-view/>
</template>
```

## Header1-图标引入

找到`Main.vue`中\<el-header>的位置，放上从`CommonHeader.vue`引入的组件，注意\<el-header>标签放在组件里而非原位置

引入图标，在ElementUI官网上找即可

```vue
<!--Commonheader.vue-->
<template>
  <el-header>
    <div class="l-content">
        <el-button size="small">
            <el-icon :size="20"><Menu/></el-icon>
        </el-button>
      
    </div>
    <div class="r-content"></div>
  </el-header>
</template>
```

```vue
<!--Main.vue-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
      </el-aside>
      <el-container>
        <CommonHeader/>
        <el-main>
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
```



