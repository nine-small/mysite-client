export default  [
    {
      name: "Home",
      mes: "首页",
      path: "/",
      exact: true,
      type:"home",
    },
    {
      name: "Blog",
      mes: "文章",
      path: "/blog",
      exact: false, //是否需要精确匹配
      type:"blog",
    },
    {
      name: "About",
      mes: "关于我",
      path: "/about",
      exact: true,
      type:"about",
    },
    {
      name: "Project",
      mes: "项目&效果",
      path: "/project",
      exact: true,
      type:"code",
    },
    {
      name: "Message",
      mes: "留言板",
      path: "/message",
      exact: true,
      type:"chat",
    },
  ]