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