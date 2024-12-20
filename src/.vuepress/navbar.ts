import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/algo",
    "/network",
    "/os",
    "/linux",
    "/java",

    {
        text: "spring",
        icon: "book",
        prefix: "/spring/",
        children: [
            {
                text: "springboot",
                link: "springboot/",
            },
            {
                text: "springsecurity",
                link: "springsecurity/",
            }
        ]
    },
    {
        text: "中间件",
        icon: "book",
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
        icon: "book",
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
