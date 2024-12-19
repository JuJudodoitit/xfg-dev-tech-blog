import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/md/resume",
    "/md/algo",
    "/md/java",

    {
        text: "spring",
        icon: "book",
        prefix: "/md/spring/",
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
        prefix: "/md/broker/",
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
    "/md/database"
]);
