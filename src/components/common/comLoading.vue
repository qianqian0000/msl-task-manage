<template>
  <div class="loading-wrap"
       :class="{'new': AddNew}"
       v-if="isShow">
    <div class="loading-cont">
      <img :src="img" />
      <div>{{msg}}</div>
    </div>
  </div>
</template>

<script>

import loading from '@/assets/images/loading.gif'
import loadingSuccess from '@/assets/images/loadingSuccess.png'
import loadingEerror from '@/assets/images/loadingEerror.png'
import loadingFail from '@/assets/images/fail.png'
export default {
  name: 'loading',
  data () {
    return {
      img: null,
      msg: '',
      isShow: false,
      AddNew: true
    }
  },
  methods: {
    show (msg) {
      this.isShow = true
      this.msg = msg
      this.img = loading
      this.AddNew = true
    },
    success (msg = '加载成功', timeout = 1000) {
      this.msg = msg
      this.img = loadingSuccess
      this.AddNew = false
      this.isShow = true
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          this.isShow = false
        }, timeout)
      })
    },
    error (msg = '网络错误', timeout = 1000) {
      this.msg = msg
      this.img = loadingEerror
      this.isShow = true
      this.AddNew = false
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          this.isShow = false
        }, timeout)
      })
    },
    fail (msg = '错误', timeout = 1000) {
      this.msg = msg
      this.img = loadingFail
      this.isShow = true
      this.AddNew = false
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          this.isShow = false
        }, timeout)
      })
    },
    hide () {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10001;
  .loading-cont {
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    img {
      display: block;
      opacity: 0.8;
      padding: 1px;
      margin: 0 auto;
    }
    div {
      text-align: center;
      font-size: 18px;
      margin-top: 20px;
    }
  }
  &.new {
    background: rgba(224, 224, 224, 0.5);
    .loading-cont {
      background: transparent;
      div {
        // display: none;
      }
    }
  }
}
</style>
