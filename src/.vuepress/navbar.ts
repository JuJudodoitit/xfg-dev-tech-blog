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
                icon: "splotch",
                link: "spring/",
            },
            {
                text: "mybatis",
                icon: "spa",
                link: "mybatis/",
            },
            {
                text: "netty",
                icon: "signs-post",
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
                icon: "bowling-ball",
                link: "kafka/",
            },
            {
                text: "redis",
                icon: "registered",
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
                icon: "lightbulb",
                link: "idea/",
            },
            {
                text: "git",
                icon: "gauge-simple",
                link: "git/",
            },
            {
                text: "maven",
                icon: "cubes",
                link: "maven/",
            },
            {
                text: "docker",
                icon: "egg",
                link: "docker/",
            }
        ]
    }
]);
