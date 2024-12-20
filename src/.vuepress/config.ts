import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  dest: "./nginx/html",
  base: "/",

  lang: "zh-CN",
  title: "leo的码路",
  description: "关于我编程过程中的学习成长的记录",

  theme,

});
