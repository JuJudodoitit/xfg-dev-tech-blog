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
    children:[
      {
        text: "springboot",
        link: "/md/spring/springboot/springboot.md",
      },
      {
        text: "springsecurity",
        link: "/md/spring/springboot/springsecurity.md",
      }
    ]
  },
  {
    text: "中间件",
    icon: "book",
    prefix: "/md/broker/",
    children:[
      {
        text: "kafka",
        link: "kafka/kafka.md",
      },
      {
        text: "redis",
        link: "redis/redis.md",
      }
    ]
  },
  {
    text: "数据库",
    icon: "book",
    link: "/md/database/mysql.md",
  },
]);
