import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Lottery 项目开发日志",
      icon: "laptop-code",
      prefix: "md/dev-log/",
      children: ["day01.md","day02.md","day03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
    },
  ],
  "/broker/": [
    {
      text: "中间件",
      icon: "laptop-code",
      prefix: "md/broker/",
      collapsible: true,
      children: ['kafka.md', 'redis.md']
    },
  ]
});
