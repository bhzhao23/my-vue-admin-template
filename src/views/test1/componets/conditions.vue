<template >
  <div class="conditions-wrapper">
    <div class="conditions-wrapper__item">
      <div class="label">姓名：</div>
      <el-input size="small"></el-input>
      <div class="label">学科：</div>
      <el-input size="small"></el-input>
      <div class="label">职业：</div>
      <el-input size="small"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Conditions'
}
</script>

<style lang="scss" scoped>
.conditions-wrapper{
  display: flex;
  align-items: center;
  width: 100%;
  &__item {
    display: flex;
    align-items: center;
    .label {
      width: 60px;
      flex-shrink: 0;
      margin-left: 20px;
    }
  }
}
</style>
