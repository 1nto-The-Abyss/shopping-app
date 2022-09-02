import { request } from './request'

// 首页数据
export function _getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}