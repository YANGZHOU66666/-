# 基础语法整理

# HTML

## 1.标题

```html
    <h1>这是1级别的标题</h1>
    <h2>这是2级别的标题</h2>
    <h3>这是3级别的标题</h3>
    <h4>这是4级别的标题</h4>
    <h5>这是5级别的标题</h5>
    <h6>这是6级别的标题</h6>
```

| 属性  | 值                                 | 说明                                         |
| ----- | ---------------------------------- | -------------------------------------------- |
| align | left<br>right<br>center<br>justify | 靠左对齐<br>靠右对齐<br>居中对齐<br>两端对齐 |

## 2.段落标记

### 2.1段落

```html
<p></p>
```

| 属性  | 值                                 | 说明                                         |
| ----- | ---------------------------------- | -------------------------------------------- |
| align | left<br>right<br>center<br>justify | 靠左对齐<br>靠右对齐<br>居中对齐<br>两端对齐 |

### 2.2换行

```html
<br>或<br/>
<!--barter rabbet-->
```

### 2.3水平分隔线

```html
<hr>
<!--horizontal rule-->
```

| 属性                            | 值                                                           | 说明                                                     |
| ------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| width<br>size<br>align<br>color | 像素（px）或百分比<br>整数，单位px<br>rgb函数、十六进制数、颜色英文名称<br>left \| right \|center | 水平线宽度<br>水平线高度<br>水平线颜色<br>水平线对齐方式 |

### 2.4拼音和注释标记

```html
<ruby>
    中<rt><rp>(</rp>zhong<rp>)</rp></rt>
</ruby>
```

### 2.5段落缩进

基本语法：

```html
<blockquote>
    引用的内容
</blockquote>
```

在里面的内容左侧增加5个空格

### 2.6预格式化标记

```html
<pre>
内容
   内容
</pre>
```

两个pre中间的内容完全保留格式，打印到网页上

## 3.文本格式化标签

### 3.1文本修饰

```html
<strong>加粗</strong>
<b>加粗</b>
<em>倾斜</em>
<i>倾斜</i>
<del>删除线</del>
<s>删除线</s>
<ins>下划线</ins>
<u>下划线</u>
<small>变小字号</small>
<big>变大字号</big>
<sup>定义上标</sup>
<sub>定义下标</sub>
```

### 3.2计算机输出标记

```html
<code>代码格式</code>
<kbd>键盘输入</kbd>
<samp>计算机代码样本</samp>
<tt>定义打字机代码</tt>
<var>变量</var>
<pre>预格式文本</pre>
```

输出效果：

![image-20230102222222541](C:\Users\18326\AppData\Roaming\Typora\typora-user-images\image-20230102222222541.png)

### 3.3引用和术语标记

```html
<abbr>定义缩写</abbr>
<address>定义地址</address>
<blockquote>
    长的引用
</blockquote>
<cite>引用、引证</cite>
<q>引用短语</q>
<dfn>定义项目</dfn>
```

### 3.4字体font标记

```html
基本语法：<font face="" size="" color="" ></font>
```

| 属性  | 值                                                  | 说明                               |
| ----- | --------------------------------------------------- | ---------------------------------- |
| size  | +1—+7,1—7,-1—-7                                     | 正数表示比原来大，负数表示比原来小 |
| color | rgb(r,g,b)，rgb(r%,g%,b%)，#rrggbb，#rgb或colorname | 规定文本颜色                       |
| face  | 字体1，字体2，……字体n                               |                                    |

## 4.特殊符号

![image-20210407233851604](https://img-blog.csdnimg.cn/img_convert/23af9e06c5d11f9b8380913b4ec656ae.png)

## 5.列表

### 5.1无序列表

(ul=unordered list)

(li=list item)

```html
<ul type="">
    <li type="">项目名称</li>
    <li type="">项目名称</li>
</ul>
```

| 属性值(ul和li标签公用，ul负责内部所有包含的行，li只对单行有效) | 说明                               |
| ------------------------------------------------------------ | ---------------------------------- |
| disc<br>circle<br>square                                     | 实心圆形<br>空心圆形<br>实心正方形 |

### 5.2有序列表

(ol=ordered list)

```html
<ol type="" start="">
    <li type="" value="">项目名称</li>
    <li type="" value="">项目名称</li>
</ol>
```

+ ol标记的属性：
  + type：定义序列起始编号
  + start：定义有序序列起始编号，默认为1

+ li标记的属性：
  + type：只影响当前列表前面编号类型
  + value：改变当前列表前编号的值，并影响后面的

| 属性  | 值                    | 说明                                                         |
| ----- | --------------------- | ------------------------------------------------------------ |
| type  | 1<br>A<br>a<br>I<br>i | 数字列表<br>大写字母列表<br>小写字母列表<br>大写罗马字母列表<br>小写罗马字母列表 |
| start | 数值                  | 有序列表中列表项的起始数字                                   |

### 5.3嵌套链表

略

### 5.4定义列表

(dl=definition list)

(dt=definition term)

(dd=definition description)

```html
<dl>
    <dt>项目1</dt>
      <dd>描述1</dd>
      <dd>描述2</dd>
      <dd>描述3</dd>
    <dt>项目2</dt>
      <dd>描述1</dd>
      <dd>描述2</dd>
</dl>
```

## 6.超链接

### 6.1基本语法：

```html
<a href="url" name="" title="提示信息" target="窗口名称">超链接标题</a>
<comment>
    herf:链接指向的目标文件
    name:规定锚(anchor)的名称
    title:指向链接的提示信息
    target:指定打开的目标窗口
</comment>
```

target属性、值说明：

| 属性值                                              | 说明                                                         |
| --------------------------------------------------- | ------------------------------------------------------------ |
| \_self<br>\_blank<br>\_top<br>\_parent<br>framename | 在当前链接中打开链接<br>在一个全新的空白窗口中打开链接<br>在顶层框架中打开链接，也可以理解为在根框架中链接<br>在当前框架的上一层打开链接<br>在指定的框架或浮动框架内打开链接 |

### 6.2超链接路径：

#### 1.绝对路径：

+ 盘符开始定义的文件路径：E:\web\index.html

+ 协议开始定义的URL地址：http://www.edu.n

#### 2.相对路径

+ 同一目录：输入要链接的文档 tongzhi.html
+ 链接上一目录：../index.html
+ 链接下一目录：先输入目录名 ks/note.html

#### 3.根路径

从网站的最底层开始走起

### 6.3超链接的应用

+ 创建HTTP文件下载超链接

+ 创建FTP站点访问超链接

  ```html
  <a href="ftp://服务器IP地址或域名">链接的文字</a>
  ```

+ 创建图像超链接

  ```html
  <a href="url"><img src="" alt=""></a>
  ```

+ 创建电子邮件超链接

  ```html
  <a href="mailto:E-mail地址[ ?subject=邮件主题[&参数=参数值1]]">链接内容</a>
  ```

**注：href链接中应该用%20来表示空格**

## 7.书签链接

定义书签：

```html
<a name="书签名">书签标题</a><!-- 定义书签 -->
```

定义书签链接：

```html
<a href="#书签名">书签标题</a> <!-- 同一页面内 -->
<a href="url#书签名">书签标题</a>  <!-- 不同页面内 -->
```

## 8.浮动框架

```html
<iframe 属性名称="value" name="iframename"></iframe>
<a href="target.html" target="iframename">链接标题</a>
```

浮动框架属性：

| 属性                           | 说明                                                         | 属性                                                    | 说明                                                         |
| ------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ |
| src<br>name<br>width<br>height | 设置源文件属性<br>设置框架名称<br>设置浮动框架窗口宽度<br>设置浮动框架窗口高度 | frameborder<br>scrolling<br>marginwidth<br>marginheight | 设置框架边框<br>设置框架滚动条<br>设置框架左右边距<br>设置框架上下边距 |

# CSS

## 1.注释

```css
/*注释*/
```

## 2.选择器

基础语法：选择器{属性:值;属性:值……}

```html
p
{
    color:red;
    text-align:center;
}
<!--设置完之后所有p标签内容被设置完-->
```

### 2.1 id选择器

选择器以#开头

```css
#para1
{
    text-align:center;
    color:red;
}
```

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<style>
#para1
{
	text-align:center;
	color:red;
} 
</style>
</head>

<body>
<p id="para1">Hello World!</p>
<p>这个段落不受该样式的影响。</p>
</body>
</html>
```

+ 注意id名第一个字不能是数字

### 2.2 class选择器

选择器以.开头

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<style>
.center
{
	text-align:center;
}
</style>
</head>

<body>
<h1 class="center">标题居中</h1>
<p class="center">段落居中。</p> 
</body>
</html>
```

+ 注意class名第一个字不能是数字

可以对指定的HTML元素使用class：

```css
p.center {text-align:center;}
/*对所有p元素应用，注意下面p还需要再写一遍class="center"，但对其他元素增加class="center"没用*/
```

## 3.CSS创建

### 3.1外部样式表

```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
<comment>引用后所有在文件mystyle.css的css样式就可以用了</comment>
```

### 3.2内部样式表

用<style></style>标记标出来

```html
<head>
<style>
hr {color:sienna;}
p {margin-left:20px;}
body {background-image:url("images/back40.gif");}
</style>
</head>
```

### 3.3内联样式

由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。请慎用这种方法，例如当样式仅需要在一个元素上应用一次时。

要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性

```html
<p style="color:sienna;margin-left:20px">这是一个段落。</p>
```

### 3.4多重样式优先级

**内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式**

## 4.CSS背景

