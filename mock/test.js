const data = [
  {
    name: '张三',
    subject: '物理',
    job: 'doctor'
  },
  {
    name: '李四',
    subject: '化学',
    job: 'doctor'
  },
  {
    name: '王五',
    subject: '生物',
    job: 'doctor'
  }
]

const testForm = {
  password: '123456789',
  confirmPwd: '123456789',
  age: '20'
}

module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: data.length,
          items: data
        }
      }
    }
  },
  {
    url: '/vue-admin-template/test/formTest',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: testForm
      }
    }
  }
]
