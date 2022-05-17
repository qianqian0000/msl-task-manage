<template>
  <div @click="$emit('on-click')">
    <p class="iconValue">{{value}}</p>
    <p class="iconName">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'iconBtn',
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  color: #323232;
  line-height: 24px;
  p {
    padding:4px 0;
    font-size: 14px;
  }
  .iconValue {
    font-size: 24px;
    color: #000;
    font-weight: bold;
  }
}
</style>
