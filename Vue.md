

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

### 单个属性绑定 v-bind:或单个:

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

## 条件渲染

### v-if="", v-else, v-else-if=""

若引号内值为true,则显示，否则不显示；注意引号内可以是表达式；可以配合v-else、v-else-if使用

```vue
<template>
  <h1>条件渲染</h1>
  <div v-if="flag">你能看见我吗</div>
  <div v-else>那你还是看看我吧</div>
  <div v-if="type==='A'">A</div>
  <div v-if="type==='B'">B</div>
  <div v-if="type==='C'">C</div>
</template>

<script>
export default{
    data(){
        return{
            flag:false,
            type:'A',
        }
    }
}
</script><template>
  <h1>条件渲染</h1>
  <div v-if="flag">你能看见我吗</div>
</template>

<script>
export default{
    data(){
        return{
            flag:true,
        }
    }
}
```

### v-show=""

当引号内表达式为true时，显示；否则不显示

```vue
<template>
  <h1>条件渲染</h1>
  <div v-show="!flag">show</div>
</template>

<script>
export default{
    data(){
        return{
            flag:false,
        }
    }
}
</script>

```



### v-show和v-if的区别

v-if：如果在初次渲染时为false，则直接什么事都不干；为true时渲染。如果多次切换true/false，每次变成true都会重新渲染一次

v-show：基于css的display: none，初始时直接渲染出来，根据布尔值决定是否显示出来

**如果频繁切换，优先使用v-show；如果切换少，优先使用v-if**

## 列表渲染

### v-for=""

#### 遍历数组

```vue
<template>
    <h3>列表渲染</h3>
    <div v-for="item in names">{{ item }}</div>
</template>
<script>
export default{
    data(){
        return {
            names:["111","222","333"],
        }
    }
}
</script>
```

上述代码含义：遍历数组中每一个元素，打印它本身

注：上述for循环中in也可以替换为of

#### 数组遍历中，使用(item, index): 分别对应对象、索引值

```vue
<template>
  <h3>列表渲染</h3>
  <div v-for="(item, index) in names">{{ item }}:{{ index }}</div>
</template>
<script>
export default {
  data() {
    return {
      names: ["111", "222", "333"],

    };
  },
};
</script>
```

#### 遍历对象：

默认遍历打印的是对象的值

```vue
<template>
  <h3>列表渲染</h3>
  <div v-for="item in type">{{ item }}</div>
</template>
<script>
export default {
  data() {
    return {
      names: ["111", "222", "333"],
      type:{
        id:1,
        name:"Bob",
        content:"12345",
      }
    };
  },
};
</script>
```

#### 三个属性：(item, key, index)分别对应值、键、索引

```vue
<template>
  <h3>列表渲染</h3>
  <div v-for="(item,key,index) in type">{{ item }}:{{ key }}:{{ index }}</div>
</template>
<script>
export default {
  data() {
    return {
      names: ["111", "222", "333"],
      type:{
        id:1,
        name:"Bob",
        content:"12345",
      }
    };
  },
};
</script>
```

渲染结果：

```
1:id:0
Bob:name:1
12345:content:2
```

### 通过key管理状态

在for后面加 :key=""，那么

不增加该属性：每次当data内容更新时，会再次渲染整个列表；若增加这一行，之前已有的不会重复渲染。

实例略

## 事件处理

### 内联事件处理器v-on:click=""或@click=""

```vue
<template>
  <h3>内联事件处理器</h3>
  <button v-on:click="count++">add</button>
  <p>{{ count }}</p>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
```

上述代码：count初始化为0；每次按button，count+1

### 方法事件处理器：

将函数打包至methods:{}下

```vue
<template>
    <h3>内联事件处理器</h3>
    <button @click="addCount">add</button>
    <p>{{ count }}</p>
  </template>
  <script>
  export default {
    data() {
      return {
        count: 0,
      };
    },
    methods:{
        addCount(){
            this.count++;
            console.log(count);
        }
    }
  };
  </script>
```



## 事件传参

### Vue中的event对象就是原生JavaScript中的event对象

```vue
<template>
  <h3>内联事件处理器</h3>
  <button @click="addCount">add</button>
  <p>{{ count }}</p>
</template>
  <script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount(e) {
      //Vue中的event对象就是原生Js中的event对象
      e.target.innerHTML = "ADD" + this.count;//注：e.target表示调用这个函数的这个标签
      this.count++;
    },
  },
};
</script>
```

### 传递参数

易懂，不解释

```vue
<template>
  <h3>内联事件处理器</h3>
  <button v-on:click="addCount('Hello')">add</button>
  <p>{{ count }}</p>
</template>
  <script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount(msg) {
      console.log(msg);
      this.count++;
    },
  },
};
</script>
```

demo: 点击paragraph会在控制台上打印对应的值

```vue
<template>
  <h3>内联事件处理器</h3>
  <p v-for="item in name" @click="printName(item)">{{ item }}</p>
</template>
  <script>
export default {
  data() {
    return {
      count: 0,
      name:['a','b','c'],
    };
  },
  methods: {
    printName(name){
      console.log(name);
    },
  },
};
</script>
```

### 在@click中获取event对象的方法：$event

```vue
<template>
  <h3>内联事件处理器</h3>
  <p v-for="item in names" @click="printName(item,$event)">{{ item }}</p>
</template>
  <script>
export default {
  data() {
    return {
      count: 0,
      names: ["a", "b", "c"],
    };
  },
  methods: {
    printName(name,e) {
      console.log(name);
      console.log(e);
    },
  },
};
</script>
```

每次打印对应name值的同时还会打印对应的\<p>对象

## 事件修饰符



### 阻止默认事件

原生Js写法：e.preventDefault()

```vue
<template>
    <h3>事件修饰符</h3>
    <a v-on:click="clickHandle" href="https://www.baidu.com">百度</a>
</template>
<script>
export default{
    methods:{
        clickHandle(e){
            //阻止默认事件
            e.preventDefault();
            console.log("点击了");
        }
    }
}
</script>
```

Vue写法：

```vue
<template>
    <h3>事件修饰符</h3>
    <a v-on:click.prevent="clickHandle" href="https://www.baidu.com">百度</a>
</template>
<script>
export default{
    methods:{
        clickHandle(){
            console.log("点击了");
        }
    }
}
</script>
```

### 其他事件略，官方文档见下

[官方文档]([事件处理 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers))

## 侦测数组变更

**能够在数组发生变化时自动渲染的方法：**

push(), pop(), shift(), unshift(), splice(), sort(), reverse()

```vue
<template>
    <h3>监听数组变化</h3>
    <button @click="addListHandle">添加数据</button>
    <ul>
        <li v-for="name in names" :key="index">{{ name }}</li>
    </ul>
</template>
<script>
export default{
    data(){
        return{
            names:["ime","jack","bob"],
        }
    },
    methods:{
        addListHandle(){
            this.names.push("eric");
        }
    }
}
</script>
```

上述代码中，点击按钮后列表后面便会显示出添加的字符串

+ **不能在数组发生变化时自动渲染的方法：**

filter(), concat(), slice()

如果上述代码中的addListHandle()方法里改为

```vue
this.names.concat(["eric"]);
```

则不会渲染出新添加的字符串

数组发生变化时不自动渲染的解决方法：

```javascript
this.nums1=this.nums1.concat(this.nums2);
```

## 计算属性

在{{}}中虽然可以放表达式，但是有时这样写会显得过于复杂，不易维护。可以将这些表达式放入计算属性中

**例：下列代码**

```vue
<template>
    <h3>{{ itbaizhan.name }}</h3>
    <p>{{ itbaizhan.content.length>0?'Yes':'No' }}</p>
</template>
<script>
export default{
    data(){
        return{
            itbaizhan:{
                name:"百战程序员",
                content:["前端","java","python"],
            }
        }
    },
}
</script>
```

**可以改变为：**

```vue
<template>
    <h3>{{ itbaizhan.name }}</h3>
    <p>{{ itbaizhanContent }}</p>
</template>
<script>
export default{
    data(){
        return{
            itbaizhan:{
                name:"百战程序员",
                content:["前端","java","python"],
            }
        }
    },
    computed:{
        itbaizhanContent(){
            return this.itbaizhan.content.length>0?'Yes':'No';
        }
    },
}
</script>
```

### 计算属性缓存VS方法

计算属性的值会基于其响应式依赖被缓存，只要表达式的内容不变，多次调用不会重复计算；而方法每调用一次计算一次

## Class绑定

### 单个属性绑定：

可以用最常见的v-bind:或:来进行绑定，但不推荐，因为这样不宜修改

```vue
<template>
  <p :class="myClass">Class样式绑定</p>
</template>
<script>
export default {
  data() {
    return {
      myClass: "demo",
    };
  },
};
</script>
<style scoped>
.demo {
  color: red;
  font-size: large;
}
</style>
```

这里vue给class多了一些功能，可以用以下方式用对象写：

```vue
<template>
  <p :class="{'active':isActive}">Class样式绑定</p>
</template>
<script>
export default {
  data() {
    return {
      isActive:true,
    };
  },
};
</script>
<style scoped>
.active {
  color: red;
  font-size: large;
}

</style>
```

以上代码中，若isActive值为true，则显示active类的属性；若为false，不显示

### 使用对象进行多个class属性绑定：

```vue
<template>
  <p :class="{'active':isActive,'danger':isDanger}">Class样式绑定</p>
</template>
<script>
export default {
  data() {
    return {
      isActive:true,
      isDanger:true,
    };
  },
};
</script>
<style scoped>
.active {
  color: red;
  font-size: large;
}
.danger{
    text-decoration: line-through;
}
</style>
```

上述代码中，p标签可以有两种类型，通过调整isActive和isDanger的值调整

+ 也可以写作：

```vue
<template>
  <p :class="myClass">Class样式绑定</p>
</template>
<script>
export default {
  data() {
    return {
      myClass:{'active':true,'danger':true},
    };
  },
};
</script>
<style scoped>
.active {
  color: red;
  font-size: large;
}
.danger{
    text-decoration: line-through;
}
</style>
```

上述代码与前文代码效果相同

### 使用数组绑定多个对象

```vue
<template>
  <p :class="[arrActive,arrDanger]">Class样式绑定</p>
</template>
<script>
export default {
  data() {
    return {
      isActive:true,
      isDanger:true,
      myClass:{'active':true,'danger':true},
      arrActive:'active',
      arrDanger:'danger',
    };
  },
};
</script>
<style scoped>
.active {
  color: red;
  font-size: large;
}
.danger{
    text-decoration: line-through;
}
</style>
```

数组中可以用三元运算符：

```vue
<template>
  <p :class="[isActive?'active':'',isDanger?'danger':'']">Class样式绑定</p>
</template>
<script>
export default {
  data() {
    return {
      isActive:true,
      isDanger:true,
      myClass:{'active':true,'danger':true},
      arrActive:'active',
      arrDanger:'danger',
    };
  },
};
</script>
<style scoped>
.active {
  color: red;
  font-size: large;
}
.danger{
    text-decoration: line-through;
}
</style>
```

+ 数组中可以嵌套对象：

```vue
<template>
  <p :class="[isActive?'active':'',{'danger':isDanger}]">Class样式绑定</p>
</template>
<script>
export default {
  data() {
    return {
      isActive:true,
      isDanger:true,
      myClass:{'active':true,'danger':true},
      arrActive:'active',
      arrDanger:'danger',
    };
  },
};
</script>
<style scoped>
.active {
  color: red;
  font-size: large;
}
.danger{
    text-decoration: line-through;
}
</style>
```

## Style绑定

### 用对象绑定多个属性

```vue
<template>
    <p :style="{color:activeColor,fontSize:activeFontSize+'px'}">Style绑定1</p>
</template>
<script>
export default {
    data(){
        return{
            activeColor:'green',
            activeFontSize:40
        }
    }
}
</script>
```

等价于：

```vue
<template>
    <p :style="{color:activeColor,fontSize:activeFontSize+'px'}">Style绑定1</p>
    <p :style="styleObject">Style绑定2</p>
</template>
<script>
export default {
    data(){
        return{
            activeColor:'green',
            activeFontSize:40,
            styleObject:{
                color:"red",
                fontSize:'30px'
            },
        }
    }
}
</script>
```

## 侦听器

在export default中增加一个新对象watch，里面的函数名必须与被监听的数据名相同

```vue
<template>
  <h3>侦听器</h3>
  <p>{{ message }}</p>
  <button @click="updateHandle">修改数据</button>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello",
    }
  },
  methods:{
    updateHandle(){
        this.message+=" World";
    }
  },
  watch:{
    message(newValue,oldValue){//参数分别为新值和旧值，一旦更新便会触发
        console.log(newValue,oldValue);
    }
  }
};
</script>
```

## 表单输入绑定 v-model

v-model将表单输入的数据与data中的变量绑定

```vue
<template>
    <h3>表单输入绑定</h3>
    <form>
        <input type="text" v-model="message">
        <p>{{ message }}</p>
    </form>
</template>
<script>
export default {
    data(){
        return{
            message:"",
        }
    }
}
</script>
```

复选框：

```vue
<template>
    <h3>表单输入绑定</h3>
    <form>
        <input type="text" v-model="message">
        <p>{{ message }}</p>
        <input type="checkbox" id="checkbox" v-model="checked"><span>{{ checked }}</span>
    </form>
</template>
<script>
export default {
    data(){
        return{
            message:"",
            checked:false,
        }
    }
}
</script>
```

### 修饰符

+ .lazy: 每次当失去焦点时（光标不在输入框上）才会更新

+ .trim

+ .number

### 模板引用：访问DOM元素

+ 用ref=""注册refs上的元素，用this.$refs读取

```vue
<template>
  <div ref="container">{{ content }}</div>
  <button @click="getElementHandle">获取元素</button>
</template>
<script>
export default {
  data() {
    return {
      content: "内容",
    };
  },
  methods: {
    getElementHandle() {
      console.log(this.$refs.container);
    },
  },
};
</script>
```

+ 也可以操作DOM的原生JS属性：

```vue
<template>
  <div ref="container">{{ content }}</div>
  <button @click="getElementHandle">获取元素</button>
  <input type="text" ref="textInput">
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    getElementHandle() {
      console.log(this.$refs.textInput.value);
    },
  },
};
</script>
```

上例中，点击按钮可获取input框中的内容（即用户输入的）

