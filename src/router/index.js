import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('@/views/home/Index.vue')
  },
  {
    path: '/taskList',
    name: 'taskList',
    component: () => import('@/views/taskList/Index.vue')
  },
  {
    path: '/taskTable',
    name: 'taskTable',
    component: () => import('@/views/taskList/taskTable.vue')
  },
  {
    path: '/addTask',
    name: 'addTask',
    component: () => import('@/views/taskList/addTask.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
/*
router.beforeEach((to, from, next) => {
  if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    if (to.path.indexOf('/pc') !== -1) {
        next({path: to.path.replace('/pc', '/mobile')})
      }
   } else {
     if (to.path.indexOf('/mobile') !== -1) {
        next({path: to.path.replace('/mobile', '/pc')})
     }
   }
 }),
*/
// 解决Loading chunk (\d)+ failed问题
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed) {
    router.replace(targetPath)
  }
})

export default router
