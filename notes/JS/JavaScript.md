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

这里只记录forEach，模板：

（即对某个集合的每个元素做参数执行一次某函数）

```
Array().forEach(function)
```

如：

```javascript
[1,4,8,9].forEach(item=>{
    if(item==4){
        return;
    }
    console.log(item);
})
```



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

<mark>注意，函数内部和外面变量名可以相同，但是函数内用的是函数内的变量：</mark>

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

### 预解析

+ 问题一：

```javascript
console.log(num);
```

报错

+ 问题二：

```
console.log(num);
var num=12;
```

实际打印undefined

+ 问题三：

```javascript
fn(11);
function fn(num){
    console.log(num);
}
```

打印11

+ 问题四：

```javascript
fn(12);
var fn=function(num){
    console.log(num);
}
```

报错

#### 预解析定义

我们js引擎运行js分为两步：预解析、代码执行

1. 预解析 js引擎会把js里面所有的var和function定义的函数提升到当前作用域的最前面
2. 代码执行，按照代码书写的顺序从上往下执行

预解析分为变量预解析（变量提升）和函数预解析（函数提升）

1. 变量提升，就是把所有变量声明提升到当前作用域最前面，不提升赋值操作

```javascript
console.log(num);
var num=10;
```

等价于

```javascript
var num;
console.log(num);
num=10;
```

同理，

```javascript
fn();
var fn=function(){
    console.log(12);
}
```

等价于

```javascript
var fn;
fn();
fn=function(num){
    console.log(12);
}
```

2. 函数提升：所有的函数声明提升到当前作用域的最前面，不调用函数

这就解决了问题三

#### 练习（坑）

```javascript
var num=10;
function fun(){
    console.log(num);
    var num=20;
}
fun();
```

输出结果是undefined，注意前面的作用域章节，函数内部声明的重名变量，在函数内调用优先用函数内的这个变量（注意函数内声明的num提升到`console.log()`上面一行

#### 坑题

```javascript
fn();
function fn(){
    var a=b=c=9;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(c);
console.log(b);
console.log(a);
```

注意var a=b=c=9;等价于var a=9;b=9;c=9;

故b, c提升为全局变量，而a在函数内部

## 防抖和节流

**防抖：**连续触发事件，但是在设定的一段时间中只执行最后一次

如：设定1000ms执行，触发事件500ms后又触发一次，按照后一次开始计时，等1000ms执行

**key：“重新开始”**

**应用场景：**搜索框搜索输入、文本编辑器实时保存

**代码思路：**利用定时器，每次触发先清除之前的定时器

```javascript
let timelD = null;
document.queryselector('.ipt').onkeyup = function () {
    if (timelD != null) {
        clearTimeout(timelD);
    }
    timelD = setTimeout(() => {
        console.log("防抖");
    }, 1000);
}
```





**节流：**单位时间内频繁触发事件，只执行一次

**应用场景：**高频事件，如快速点击、鼠标滑动、resize事件、scroll事件

**代码思路：**利用定时器，等定时器执行完毕，才开启定时器

```javascript
let timeID=null;
document.queryselector('.ipt').onmouseover=function(){
    if(timeID!=null){
        return;
    }
    timeID=setTimeout(() => {
        console.log("节流");
        timeID=null;
    }, 1000);
}
```





## 原型与原型链

原型：每个函数都有prototype属性，称之为原型

因为这个属性的值是个对象，也称为原型对象

原型可以放一些属性和方法，共享给实例对象使用

```javascript
const arr= new Array(1,2,3);
arr.reverse();//挂载在Array.prototype上
arr.sort();
```

\_\_proto\_\_：每个对象都有\_\_proto\_\_属性

**作用**：这个属性指向它的原型对象

```javascript
console.log(arr.__proto__===Array.prototype)//true
```

![](.\assets\proto.png)



原型链：对象都有\_\_proto\_\_属性，这个属性指向它的原型对象，原型对象也是对象，也有\_\_proto\_\_属性，指向原型对象的原型对象，这样一层一层形成的链式结构成为原型链，最顶层找不到则返回null

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

