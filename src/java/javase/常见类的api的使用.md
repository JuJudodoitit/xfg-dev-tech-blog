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