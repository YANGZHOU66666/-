# JavaScript Notes

## Basic

### ECMAScript——定义的基准

Javascript是一种ECMAScript

### DOM——文档对象模型

+ 创建表示文档的树

### BOM——浏览器对象模型

+ 支持访问和操作浏览器的窗口，操控浏览器之外的部分

## Js and HTML

### \<script>\</script>标签

+ 建议放在\<body>\</body>之间

### 推迟执行脚本

+ 属性 defer="defer"：脚本在整个页面解析完毕后执行

### 异步执行脚本

+ 属性async：不必等脚本下载和执行完后加载页面，也不必等到该异步脚本下载和执行后再加载其他脚本（加载顺序不是一定的）
+ 异步脚本不应该在加载期间修改DOM

### 动态加载脚本

+ 向DOM中动态添加script元素

```javascript
//直到执行到这段代码才会发送加载'gibberish.js'文件代码的请求
let script = document.createElement('script');
script.src = 'gibberish.js';
document.head.appendChild(script);
```

### 最好将Js代码放在外部文件中

## 基础语法

### 区分大小写、关键字与保留字、注释、语句：略

### var和let

+ var

1. var声明函数作用域（函数内局部变量，结束调用时销毁）
2. var声明提升（自动声明在函数开始调用的部分）
3. 作用域（一个函数内）可以多次var同一个变量名
4. 在全局作用域中声明会成为window对象的属性  

+ let

1. let声明块作用域（花括号之间）
2. 同一块内不允许多次let一个变量名
3. 没有声明提升（不会在块的开头处自动声明）

+ 比较：

1. for循环中var声明的变量i会渗透到循环外部，而let声明的不会
1. 

### const

常量，不可修改，作用域为块

### SetTimeOut



第一个参数为函数（注意必须加双引号），第二个参数为等待事件，单位为ms



## 闭包

+ **概念：**一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域

+ **简单理解：**闭包 = 内层函数 + 引用的外层函数变量

```javascript
function outer(){
    const a = 1;
    function f(){
        console.log(a);
    }
    f();
}
```

也是一个闭包，只不过调用outer会直接打印a，outer无返回值，和我们常用的闭包不太相同

**闭包一定有return吗？**否

**闭包一定有内存泄漏吗？**否

外部如果想要使用闭包的变量，此时需要return

```vue
function outer(){
    let a=10;
    return function(){
        a++;
        console.log(a);
    }
}
const fn=outer();
```

这样可以**保护变量**，在外部无法修改a的值

## Promise

