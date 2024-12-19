import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/resume",
    "/algo",
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
    "/database"
]);
