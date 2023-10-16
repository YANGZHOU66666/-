

## 目录结构

```
.vscode: vscode工具的配置文件夹

node_modules: 支持项目运行的依赖文件

public: 资源文件夹

src: 源码文件夹

.gitignore: git忽略文件

index.html: 入口html文件

package.json: 信息描述文件

README.md: 注释文件

vite.config.js: Vue配置文件
```

## 模板语法：

### 最基本：模板插值

```vue
<template>
<h1>标题</h1>
<p>{{ msg }}</p> 
</template>
<script>
export default{
    data(){
        return {
            msg:"神奇的语法"
        }
    }
}
</script>
```

### 使用JavaScript表达式

```vue
<template>
<h1>标题</h1>
<p>{{ msg }}</p> 
<p>{{ number + 1}}</p>
<p>{{check?"Yes":"No"}}</p>
</template>
<script>
export default{
    data(){
        return {
            msg:"神奇的语法",
            number: 10,
            check: true
        }
    }
}
</script>
```

注：必须是一个表达式，不能是一个非表达式的语句。如

```
{{var a=1; }}
{{if(check){ return message}}}
```

等语句都不行

### 原始HTML

```vue
<template>
<h1>标题</h1>
<p>{{ msg }}</p> 
<p>{{ number + 1}}</p>
<p>{{check?"Yes":"No"}}</p>
<p v-html="raw-html"></p>
</template>
<script>
export default{
    data(){
        return {
            msg:"神奇的语法",
            number: 10,
            check: true,
            raw-html:"<a href='https://www.baidu.com'>百度</a>"
        }
    }
}
</script>
```

## 属性绑定

### 单个属性绑定

将data中的值作为类名、id名等：需要加v-bind

```vue
<template>
  <div v-bind:class="msg" v-bind:id="appId">测试</div>
</template>

<script>
export default{
  data(){
    return {
      msg: "active",
      dynamicId:"appId"
    }
  }
}
</script>

```

如果对象中某值为null或undefined，则不会出现（下例中title属性不会出现）

```vue
<template>
  <div v-bind:class="msg" v-bind:id="dynamicId" v-bind:title="dynamicTitle">测试</div>
</template>

<script>
export default{
  data(){
    return {
      msg: "active",
      dynamicId:"appId",
      dynamicTitle:null,
    }
  }
}
</script>
```

v-bind:等价于:（一个冒号）

```vue
<template>
  <div :class="msg" :id="dynamicId" v-bind:title="dynamicTitle">测试</div>
</template>

<script>
export default{
  data(){
    return {
      msg: "active",
      dynamicId:"appId",
      dynamicTitle:null,
    }
  }
}
</script>
```

### 一次绑定多个值

```vue
<template>
  <div v-bind="objectOfAttrs">测试</div>
</template>

<script>
export default{
  data(){
    return {
      objectOfAttrs:{
        id: appId,
        class: active,
      },
    }
  }
}
</script>
```

这里自动绑定了id="appId"和class="ative"