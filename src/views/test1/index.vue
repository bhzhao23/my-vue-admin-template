<template>
  <div class="test-wrapper">
    <list-layout>
      <template slot="header">
        <conditions />
      </template>
      <template slot="content">
        <lb-table :column="column" :data="listData" pagination="true" />
      </template>
    </list-layout>
  </div>
</template>

<script>
import * as API from '@/api/test1'
import ListLayout from '@/components/ListLayout/index'
import LbTable from '@/components/lb-table/lb-table'
import Conditions from '@/views/test1/componets/conditions'
export default {
  name: 'Index',
  components: {
    ListLayout,
    LbTable,
    Conditions
  },
  data() {
    return {
      listData: [],
      column: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'subject',
          label: '学科'
        },
        {
          prop: 'job',
          label: '职业'
        },
        {
          prop: 'actions',
          label: '操作',
          render(_, scope) {
            return (
              <div>
                <el-button type='text'>修改</el-button>
                <span>|</span>
                <el-button type='text'>查看</el-button>
                <span>|</span>
                <el-button type='text'>删除</el-button>
              </div>
            )
          }
        }
      ]
    }
  },
  created() {
    API.getMockList().then(res => {
      const { code, data } = res
      if (Number(code) === 20000) {
        const { items } = data
        this.listData = items
      }
    })
  }
}
</script>

<style scoped>

</style>
