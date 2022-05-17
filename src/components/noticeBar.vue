<template>
<div>
  <img src="~@/assets/images/icon/notice.png" />
  <span class="notice">{{noticeContent}}</span>
</div>
</template>

<script>
export default {
  name: 'noticeBar',
  props: {
    noticeContent: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  width: 100%;
  background: #fff;
  line-height: 28px;
  margin: 12px 0;
  padding: 8px;
  border-radius: 3px;
  display: flex;
  color: #d81e06;
  img {
    width: 28px;
    height: 28px;
  }
}
</style>
