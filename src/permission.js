import router from './router'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

//  路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
    //  to,将要访问的路径
    // from  从哪个路径跳转过来的
    // next 是一个函数,代表放行
    //  let token = window.sessionStorage.getItem('token')
     let token = getToken()
      if(to.path==='/login'){
       return next()
      }else{
        if(!token){
            Message.error('登录已失效，请重新登录');
         return next('/login')
        }else{
          next()
        }
      }
   })