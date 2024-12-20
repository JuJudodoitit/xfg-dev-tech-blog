import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/algo",
    "/network",
    "/os",
    "/linux",
    "/java",

    {
        text: "框架",
        icon: "table-cells-large",
        prefix: "/framework/",
        children: [
            {
                text: "spring",
                link: "spring/",
            },
            {
                text: "mybatis",
                link: "mybatis/",
            },
            {
                text: "netty",
                link: "netty/",
            }
        ]
    },
    {
        text: "中间件",
        icon: "person-shelter",
        prefix: "/broker/",
        children: [
            {
                text: "kafka",
                link: "kafka/",
            },
            {
                text: "redis",
                link: "redis/",
            }
        ]
    },
    "/database",
    {
        text: "开发工具",
        icon: "briefcase",
        prefix: "/developmenttools/",
        children: [
            {
                text: "idea",
                link: "idea/",
            },
            {
                text: "git",
                link: "git/",
            },
            {
                text: "maven",
                link: "maven/",
            },
            {
                text: "docker",
                link: "docker/",
            }
        ]
    }
]);
