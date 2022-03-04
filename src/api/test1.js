import request from '@/utils/request'

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
