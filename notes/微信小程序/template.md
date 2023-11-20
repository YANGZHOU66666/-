# WX template

### form：表单+提交按钮组合

\<form>标签的bindsubmit属性即点击按钮会触发的函数

\<button>标签属性form-type的两个值：submit为提交按钮，reset为重置按钮

```html
<form bindsubmit="btnSub">
  <input name="title" class="testInput" placeholder="请输入标题"></input>
  <input name="author" class="testInput" placeholder="请输入作者"></input>
  <textarea name="content" class="testInput" placeholder="请输入内容"></textarea>
  <button type="primary" form-type="submit">提交</button>
</form>
```

