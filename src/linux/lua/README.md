---
title: lua
icon: robot
category:
- linux

## require
lua中的require函数用于加载一个模块。在lua中如果一个目录下存在一个init.lua文件，则该目录被是为一个模块，
可以被require函数加载并自动执行目录下的init.lua文件。但是lua中的模块不是必须以一个目录的形式存在。
当执行require("moudle_name")时，它会先从lua/moudle_name/init.lua,如果在module_name目录下找不到init.lua
转为寻找lua/moudle_name.lua去执行,只不过这种方式对模块文件有要求，其最后必须返回一个值（通常是 table）：
```lua
-- lua/my_module.lua
local M = {}  -- 创建一个局部表

function M.say_hello()
    print("Hello from my_module!")
end

function M.add(a, b)
    return a + b
end

return M  -- ⭐ 必须返回这个表！

```
