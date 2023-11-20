# JavaScript Notes

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

## 浏览器执行JS过程

浏览器分为两部分：

+ 渲染引擎，解析HTML和CSS，俗称内核
+ JS引擎：也称JS解释器，读取JS代码，处理后运行

浏览器本身不会执行JS代码，通过内置JS引擎来执行JS代码。JS引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机执行。（脚本语言->逐行解释执行）

## JS组成

+ ECMAScript：JS语法
+ DOM：文档对象模型（Document Object Model）
+ BOM：浏览器对象模型，对浏览器窗口进行操作（Browser Object Model）

## JS三种书写位置

1. 行内式

```html
<input type="button" value="唐伯虎" onclick="alert('秋香姐')">
```

HTML中常用双引号，JS中常用单引号

可读性差

2. 内嵌式的JS

```html
<script>
    alert('沙漠骆驼');
</script>
```

3. 外部式

```html
<script src="my.js"></script>
```

\<script>标签内不要写代码

## 输入输出

### prompt(): 输入框

```javascript
prompt('请输入您的年龄')
```

### alert(): 弹出警示框

```javascript
alert('计算的结果是');
```

### console.log(): 控制台中打印

## 断点调试

打开开发者工具sources栏，直接打即可

按一个箭头按钮进行下一条语句

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

### for, while, do while循环

略

### switch语句

```javascript
switch(exp){
    case c1:
        //do something
        break;
    case c2:
        //do something
        break;
    default:
        //do something
}
```

## 数组

```javascript
var arr1=new Array();//利用创建函数创建数组
var arr2=[];//利用字面量创建数组

```

没有的数组元素（下标越界等）：undefined

### 遍历数组

暂略，等forEach会了再更

## 函数

### arguments的使用

```javascript
function fn(){
    console.log(arguments);
    console.log(arguments.length);
}
fn(1,2,"aaa");
//arguments类似于一个数组，包含所有参数
```

## JavaScript作用域

作用域：代码变量在某个范围内起作用和效果，目的是为了提高程序的可靠性，更重要的时减少命名冲突

### 全局作用域

整个script标签，或者是一个单独的js文件

```javascript
var num=10;
```

### 局部作用域：

在函数内部就是局部作用域

```javascript
function fn(){
    var num=20;
    console.log(num);
}
```

注意，函数内部和外面变量名可以相同，但是函数内用的是函数内的变量：

```javascript
var num=10;
function fn(){
    var num=20;
    console.log(num);//这里打印20
}
console.log(num);//这里打印10
```



### 全局变量和局部变量

全局变量：在整个文件/script标签中都能访问

局部变量：函数内部访问

全局变量的特殊情况：

```javascript
function fn(){
    num2=1;
}
fn();
console.log(num2);//在函数里不声明直接赋值，在外面可以获取（特性，平常不使用）
```

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

