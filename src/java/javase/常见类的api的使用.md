---
title: 常见类的api的使用
icon: poo
category:
- java
- javase
---

## String
### indexOf(index)
### indexOf(beginIndex, endIndex)
### substring()
### chars()


## Matcher & Pattern


## Map
### compute();
### computeIfAbsent();
### computeIfPresent();
### putAll();

```java
                if(charMap.containsKey(c)){
                    charMap.put(c, Math.max(len, charMap.get(c)));
                }else {
                    charMap.put(c, len);
                }
```

::: tip
这是一个提示示例
:::

::: tip Assets

- You can place images besides your Markdown files nd use **relative links**.
- For images in `.vuepress/public` directory, please use absolute links (i.e.: starting with `/`).

:::

::: tip README.md

`README.md` 是特例，在 Markdown 中，按照约定俗成，它会作为所在文件夹的主页。所以在渲染为网页时，它的对应路径为网页中的主页路径 `index.html`。

这应该很好理解。

:::


::: tip 为什么要这样做?

要提供正确的语言环境文本，主题需要知道根文件夹以及每个多语言文件夹正在使用哪种语言。

:::

::: warning 限制

由于结构侧边栏取决于文件结构和 Markdown Frontmatter，因此 Markdown 的任何更改都可能更新结构侧边栏。(例如: 如下所述在 Frontmatter 中设置 `index: false`)

但是，对于大型网站，重新计算侧边栏是一个高耗时操作，因此主题只会在 [`hotReload` 启用](../../config/theme/basic.md#hotreload) 的情况下实时更新结构化侧边栏。

:::


::: note

有效最大值取决于你通过 [markdown.headers.level](https://vuejs.press/zh/reference/config.html#markdown.headers) 提取了哪些级别的标题。

由于 [markdown.headers.level](https://vuejs.press/zh/reference/config.html#markdown.headers) 的默认值是 `[2, 3]` ，因此 `headerDepth` 的默认最大值是 `2` 。

:::

::: info 启用插件

要想启用此插件，你需要在主题选项中将 `plugins.copyright` 设置为 `true` 或是一个对象 (空对象也是可以的) 才能启用它。

设置为 `true` 等同于设置 `{ global: true }`。

:::


::: important

全局注册组件可以让组件变得“开箱即用”，所以如果一个组件在你的项目中经常使用，建议你全局注册它。

但是如果一个组件很大，只在某些页面或布局中使用，建议你[局部注册组件](./sfc.md#导入文件)。

:::