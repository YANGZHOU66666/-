# Vant weapp组件库

## 在项目中初始化vant

在项目的根目录下：

1. 初始化npm

```
npm init -y
```

2. 输入vantapp官网安装教程中步骤一

```
npm i @vant/weapp -S --production
```

3. 删去`app.json`中`"style":"v2`，避免样式冲突

4. 修改 project.config.json

需要手动在 `project.config.json` 内添加如下配置，使开发者工具可以正确索引到 npm 依赖的位置。

```json
{
  ...
  "setting": {
    ...
    "packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram/"
      }
    ]
  }
}
```

<mark>注意：新版本的话"miniprogramNpmDistDir"的值要改成"./"</mark>

4. 步骤四 构建 npm 包

打开微信开发者工具，点击 **工具 -> 构建 npm**，并勾选 **使用 npm 模块** 选项，构建完成后，即可引入组件。

<mark>2023.11.25学习记录：必须在终端切miniprogram目录下才能执行上述操作</mark>