## CSS Grammar

### px/em/rem

px：固定大小

em：相对父元素的比例，如em=2，则是父元素两倍

rem：相对根元素的比例

### 选择符

#### 类型选择符：直接设置对应标签名

```css
p {
    color:black;
}
```

#### ID选择符：

```html
<div id="con">
    test word
</div>
```

```css
#con{
    color:black;
}
```

#### 类选择符

```html
<div class="container">
    test word
</div>
```

```css
.container{
    width:500px;
    margin:0 auto;
}
```

#### 后代选择符：选择某种元素的全部后代

```html
<h1>title</h1>
<div class="wrap">
    <h1>
        theme
    </h1>
    <p>
        paragraph
    </p>
</div>
```

```css
.wrap h1{
    color: red;
}
```

#### 子选择符：只选择下一代，不选择更远的后代

```css
#nav > li{
    /*do something*/
}
```

#### 相邻同辈选择符：选择两个相邻的、公用一个父元素的元素中的后者

```css
h2 + p {/*使h2标题后的一段生效，注意h2不会变化*/
    font-size: 1.4em;
    font-weight: bold;
    color: #777;
}
```

#### 一般同辈选择符：选择一个元素后面所有

```css
h2 ~ p {/*h2后面所有段落都生效*/
    font-size: 1.4em;
    font-weight: bold;
    color: #777;
}
```

#### 通用选择符：*

选择所有元素

```css
#con > *{
    color: red;/*对所有con的一级子元素设置属性*/
}
```

#### 属性选择符：

```html
<p>
    The term <abbr title="self-contained underwater breathing appratus">SCUBA</abbr> is an acronym rather than an abbrevation as it is pronounced as a word.
</p>
```

```css
abbr[title]{
    border-bottom: 1px dotted #999;
}
abbr[title]:hover{
    cursor:help;
}
```

显示时abbr包裹的部分会有下划线，且鼠标上去会变成问好。只对设置title属性的abbr标签起作用

```css
input[type="submit"]{
    cursor: pointer;
}
```

+ 匹配特定模式：

匹配以某些字符开头的属性值：加^

```css
a[href^="http:"]
```

匹配以某些字符结尾的属性值：加$

```css
img[src$=".jpg"]
```

匹配包含某些字符的属性值：加*

```css
a[href$="/about/"]
```

匹配以空格分隔的字符串中的属性值：加~

```
a[rel~=next]
```

选择开头是指定值或指定值后连接着一个下划线的情况：加竖线|

```css
a[lang|=en]
```



### 选择器顺序

#### 1. 无堆叠情况：

ID选择器>{类选择器、伪类选择器、属性选择器}>{类型（标签）选择器、伪元素选择器}

#### 2. 有堆叠情况：

+ 权重：ID>类>标签，哪个设置权重和最大大用哪个类型

+ 相同权重情况，就近原则，离元素最近的标签起作用

+ 继承的元素（即这一级标签没有被设置的）**权重为0**。此前提下，如果这一级标签被设置，直接变成被设置的

+ 另外，如果同时调用两个类型（或id），哪个定义的位置离引用的位置近，优先哪个

#### 3. !important标记

+ 某属性（注意不是某类或某标签）权重变成无穷大

+ 不影响继承的元素。对继承的元素权重仍然为0。故继承的元素找上级元素时依然满足“就近原则”而与important无关





### 渐变设置

#### linear-gradient（横向渐变）

```css
.c1{
	background-image: linear-gradient(blue, red);/*最简单用法，从上到下渐变*/
}
.c2{
	background-image: linear-gradient(to right, blue, red);/*声明从左到右的方向*/
}
.c3{
    background-image: linear-gradient(to bottom right, blue, red);/*从左上角到右下角*/
}
/*xdeg的用法：默认从六点钟方向为起点开始，起点顺时针旋转，x从0到360*/
.c4{
    background-image: linear-gradient(0deg, yellow, red);/*从下往上*/
}
.c5{
    background-image: linear-gradient(90deg, red, yellow); /*从左往右*/
}
.c6{
    background-image: linear-gradient(to right, transparent 50%, red);/*前50%为透明，剩余部分从透明渐变到红色*/
}

.c7{
    background-image: linear-gradient(to right, transparent 50%, red 0);/*前50%透明，剩余部分全是红色（记号0）*/
}
.8{
    background-image: linear-gradient(to right, transparent , red 0, blue);/*似乎等价于linear-gradient(to right, red, blue)，这里猜想加一个0会让该值前面所有渐变失效
}
```

#### circle-gradient（径向渐变）

# #######待施工##########

### transform: 2D变形



## CSS Instance

### 画圆形

```css
.container{
    width:100px;
    height:100px;/*Not limited size, width==height*/
    border-radius: 50%;
}
```

