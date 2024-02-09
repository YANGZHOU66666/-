# Ajax

全称Asynchronous JavaScript And XML，即异步的JS和XML

通过AJAX可以在浏览器中向服务器发送异步请求，<mark>最大的优势：无刷新获取数据</mark>

AJAX不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式

## XML

可扩展标记语言(extensible markup language)

被设计用来传输和存储数据，和HTML类似，不同点在于XML全是预定义标签

如：

```xml
<student>
    <name>孙悟空</name>
    <age>18</age>
    <gender>男</gender>
</student>
```

但现在已经被JSON替代了：

```json
{"name":"孙悟空","age":18,"gender":"男"}
```

## AJAX的特点

### 优点

1. 无需刷新页面与服务器端进行通信
2. 允许根据用户事件更新部分页面内容

### 缺点

1. 没有浏览历史，不能回退
2. 存在跨域问题（同源）
3. SEO不友好

## HTTP协议请求报文与相应文本结构

HTTP(Hypertext transport protocol)：超文本传输协议，详细规定了浏览器和万维网服务器之间相互通信的规则

+ 请求报文：

```
行	post /s?ie=utf-8 HTTP/1.1
头	Host: atguigu.com
	 Cookie: name=guigu
	 Content-type: application/
     User-Agent: chrome 83
空行
体   username=admin&password=admin
```

+ 响应报文

```
行   HTTP/1.1 200 OK
头	Content-Type: text/html;charset=utf-8
	 Content-length: 2048
	 Content-encoding: gzip
空行
体   <html>
		<head>
		</head>
		<body>
			<h1>尚硅谷</h1>
		</body>
	 <html>

```

