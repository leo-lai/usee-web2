let routes = [
  {
    path: '/',
    meta: { title: '优视一号' },
    component: (resolve) => require(['./views/index'], resolve)
    
  }, 
  {
    path: '/sys',
    meta: { title: '三大护眼系统' },
    component: (resolve) => require(['./views/system'], resolve)
  }, 
  {
    path: '/join',
    meta: { title: '区域合作' },
    component: (resolve) => require(['./views/join'], resolve)
  }, 
  {
    path: '/shop',
    meta: { title: 'U视商城' },
    component: (resolve) => require(['./views/shop'], resolve)
  }, 
  {
    path: '/shop/info/:id',
    meta: { title: '商品详情' },
    component: (resolve) => require(['./views/shop-info'], resolve)
  }, 
  {
    path: '/news',
    meta: { title: 'U视资讯' },
    component: (resolve) => require(['./views/news'], resolve)
  }, 
  {
    path: '/news/info/:id',
    meta: { title: 'U视资讯-详情' },
    component: (resolve) => require(['./views/news-info'], resolve)
  }, 
  {
    path: '/about',
    meta: { title: '关于我们' },
    component: (resolve) => require(['./views/about'], resolve)
  }, 
  {
    path: '*',
    meta: { title: '找不到页面' },
    component: (resolve) => require(['./views/404'], resolve)
  }
]

export default routes
