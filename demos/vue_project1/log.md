### 项目学习记录

### 2023.11.1 对之前的做一下记录（1-8集）

vue-router设置路由，做出App.vue（根组件，只放一个路由），Main.vue（放整个页面）,Home.vue（放置主要部分，即除了侧边栏、顶栏的部分）

用elementUI上的设计好的组件做了导航栏和侧栏的样式

注意刚开始header和home都在main里，左右关系，且父组件为弹性盒子，无法换行；需要在main.vue里增加.r-container{ flex-wrap: wrap; }

style标签里lang="less"表示可以嵌套使用css类

对\<el-header>进行css属性设计需要用.el-header{}，或直接用header{}

### 2023.11.1 第9集

写一个数组过滤有/无某属性对象的函数：

const hasChildren=list.filter((item)=>item.children);

```javascript
const noChildren=list.filter((item)=>!item.children);//可以直接用!
```

用v-for将列表中的信息打印在侧栏中

\<el-menu>标签可以加:collapse="false"/"true"属性来控制收缩

### 2023.11.3 第10集

css注意：当只设置#app的height为100%时，可能无法占据整个页面，原因是html（整个页面）、body（页面最大的盒子）这两个（似乎）可以认为是div的元素的高度没有设置（默认为auto），故会被内部的元素撑为多大即为多大。这时需要设置：

```css
.html, .body, #app{
    height:100%;
}
```

注意一定要加逗号，不加逗号的话变成html的子元素body的子元素#app起作用（即因果关系而非并列关系）。加逗号后变成并列关系



所有需要高度100%的元素设置完后，这里home上面出现了一片空白。原因是r-container（即除了aside之外的那两块）是flex布局，纵轴方向上的align-items默认为stretch，设置为flex-start后问题解决（所有元素起始点向交叉轴起始位置靠近）
