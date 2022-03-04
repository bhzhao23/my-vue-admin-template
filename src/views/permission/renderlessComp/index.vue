<template>
  <div >
    <slot :validate="validate" />
    <span class="errText">{{ errMsg }}</span>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: ['rules', 'value'],
  data() {
    return {
      errMsg: ''
    }
  },
  methods: {
    validate() {
      const validateSatatus = this.rules.reduce((pre, cur) => {
        const check = cur && cur.test && cur.test(this.value)
        this.errMsg = check ? '' : cur.message
        return pre && check
      }, true)
      return validateSatatus
    }
  }
}
</script>

<style lang="scss" scoped>
.errText{
  color: red;
}
</style>
