# CS176 Project - mlol

## 简介

本次项目尝试复刻掌上英雄联盟手机客户端`关注`页，并可实现向二级页面的跳转。

## 运行

```
npm run dev
```

## 功能支持

- SSR ： 通过`next.js`进行服务端渲染
  - material-ui icon及组件可在js禁用情况下正确加载样式
  - *.module.css中的样式无法在js禁用情况下加载

## 组件划分

#### 关注页

- AppBar
- Tabs
- Carousel
- Card
- BottomBar

#### 二级页面

- Article
  - ArticleHeader
    - ArticleAuthor
  - ArticleContent

## 展示

#### 关注页

![res1](https://terry-xhx.oss-cn-shanghai.aliyuncs.com/img/res1.png)

#### 二级页面

![res2](https://terry-xhx.oss-cn-shanghai.aliyuncs.com/img/res2.png)

