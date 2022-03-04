import request from '@/utils/request'

/**
 * 列表测试数据获取
 * @returns {request}
 */
export function getMockList() {
  return request({
    url: '/vue-admin-template/test/list',
    method: 'get'
  })
}

export function getTestForm() {
  return request({
    url: '/vue-admin-template/test/formTest',
    method: 'get'
  })
}
