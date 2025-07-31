## 整个工作流程
> 前提：
> 1. 有个一个服务器
> 2. 完成域名绑定
> 3. 服务器上安装nginx
> 4. 生成服务器公私钥

1. 本地创建一个vuepress项目，安装vuepress的规则编写文档
2. 在vuepress项目下创建一个.github/workflows/xx.yaml工作流文件
3. 项目推送到github,在当前仓库下配置Actions
   SSH_PRIVATE_KEY: 私钥
   SSH_HOST: 服务器域名
   SSH_USERNAME: 登录服务器的用户名
   SSH_PASSWORD: 登录服务器的密码
   REMOTE_PATH: nginx下挂在的博客项目静态路径
本项目下的dev-ops目录下提供了一个nginx配置示例，以及一个nginx容器的compose
还包括在服务器上生成密钥的脚本。
4. 完成以上配置后，每次只需在项目中编写md文件，推送到代码仓会自动运行工作流
工作流执行完成后就可通过域名访问博客了。