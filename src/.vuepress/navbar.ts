import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/md/resume",
  {
    text: "数据结构与算法",
    icon: "book",
    link: "/md/algo/algo.md",
  },
  {
    text: "java",
    icon: "book",
    link: "/md/java/java.md",
  },
  {
    text: "spring",
    icon: "book",
    link: "/md/spring/springboot/springboot.md",
    children:{
      text: "springboot",
      link: "/md/spring/springboot/springboot.md",
    },
  },
  {
    text: "中间件",
    icon: "book",
    link: "/md/broker/kafka.md",
  },
  {
    text: "数据库",
    icon: "book",
    link: "/md/database/blog.md",
  },
]);
