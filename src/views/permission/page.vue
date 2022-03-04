<template>
  <div>
    permission 当前用户 -- {{ roles }}
    <el-form class="my-form">
      <el-form-item label="密码" label-width="100px">
        <s-validate #default="{validate}" :rules="rules" :value="value">
          <el-input v-model="value" class="input" @blur="validate" />
        </s-validate>
      </el-form-item>
      <el-form-item label="确认密码" label-width="100px">
        <s-validate #default="{validate}" :rules="rules2" :value="value2">
          <el-input v-model="value2" class="input" @blur="validate" />
        </s-validate>
      </el-form-item>
      <el-form-item label="年龄" label-width="100px">
        <s-validate #default="{validate}" :rules="rules3" :value="age">
          <el-input v-model="age" class="input" @blur="validate" />
        </s-validate>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SValidate from './renderlessComp/index'
import * as API from '@/api/test1'
export default {
  name: 'Page',
  components: {
    SValidate
  },
  computed: {
    ...mapGetters(['roles'])
  },
  data() {
    const _this = this
    return {
      value: '',
      value2: '',
      age: '',
      rules: [
        {
          test: function(value) {
            return /\d+/.test(value)
          },
          message: '请输入至少一个数字'
        }
      ],
      rules2: [
        {
          test: function(value) {
            console.log(_this)
            if (value === '') {
              this.message = '不能为空'
              return false
            }
            if (value !== _this.value) {
              this.message = '两次输入不一样'
              return false
            }
            return /\d+/.test(value)
          },
          message: '请输入至少一个数字'
        }
      ],
      rules3: [
        {
          test: function(value) {
            return /\d+/.test(value)
          },
          message: '请输入至少一个数字'
        }
      ]
    }
  },
  methods: {
  //  回显表单数据
    showForm() {
      API.getTestForm().then(res => {
        const { code, data } = res
        if (Number(code) === 20000) {
          this.value = data.password
          this.value2 = data.confirmPwd
          this.age = data.age
        }
      })
    }
  },
  created() {
    this.showForm()
  }

}
</script>

<style lang="scss" scoped>
.my-form{
  width: 600px;
  padding: 30px;
}
.input{
  width: 150px;
}
</style>
