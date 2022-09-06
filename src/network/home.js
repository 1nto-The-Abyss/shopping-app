import { request } from './request'

// 首页轮播图与推荐数据
export function _getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// 首页分类数据
export function _getHomeGoods(params) {
  return request({
    url: '/home/data',
    params: params
  })
}