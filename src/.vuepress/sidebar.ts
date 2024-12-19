import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/md/": [
    "",
    {
      text: "中间件",
      icon: "book",
      prefix: "broker/",
      children: ["kafka/", "redis/"],
    },
  ],

  "/md/broker/redis": "structure",
  "/md/broker/kafka": "structure",
});
