<template>
<div class="dh-field ">
  <div class="van-hairline--bottom">
    <van-field
      v-model="resultLabel"
      v-bind="$attrs"
      rows="2"
      readonly
      :is-link="$attrs.disabled === undefined"
      type="textarea"
      @click="showPopu($attrs.disabled)"
      class="dh-cell"
    />
    <van-popup v-model="show" position="bottom" class="" >
       <div class="van-picker__toolbar">
        <button type="button" class="van-picker__cancel" @click="cancel">取消</button>
        <div class="van-ellipsis van-picker__title">{{$attrs.label}}<span v-if="max">(最多选{{max}}个)</span></div>
        <button type="button" class="van-picker__confirm" @click="onConfirm">确认</button>
      </div>
      <div class="checkbox-con"  style="max-height:264px;overflow-y:auto">
          <van-field v-model="searchVal"  placeholder="搜索" @input="search" v-if="isSearch" input-align="left"/>
        <van-cell title="全选" v-if="!max">
            <template #right-icon>
                <van-checkbox name="all" @click="toggleAll"  v-model="checkedAll"/>
              </template>
          </van-cell>
          <van-cell title="不包含" v-if="noIncludeOption">
            <template #right-icon>
                <van-checkbox name="00" @click="unToggleAll"  v-model="unCheckedAll"/>
              </template>
          </van-cell>

        <van-checkbox-group :max="max" v-model="checkboxValue" @change="change" ref="checkboxGroup">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in columnsData"
              clickable
              :key="item[option.value]"
              :title="item[option.label]"
              @click="toggle(index,item)"
            >
              <template #right-icon>
                <van-checkbox :name="item[option.value]" ref="checkboxes" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </div>
    </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VanFieldCheckbox',
  model: {
    prop: 'selectValue'
  },
  props: {
    columns: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectValue: {
      type: Array,
      default: function () {
        return []
      }
    },
    option: {
      type: Object,
      default: function () {
        return { label: 'name', value: 'code' }
      }
    },
    isSearch: {
      type: Boolean,
      default: false
    },
    max: { // 最大可选
      type: [Number, String],
      default: 0
    },
    noIncludeOption: { // 是否有不包含选项
      type: Boolean,
      default: false
    }
  },
  computed: {
    resultLabel: {
      get () {
        var columns = JSON.parse(JSON.stringify(this.columns))
        if (this.noIncludeOption) { // 开启不包含
          columns.unshift({ name: '不包含', code: '00' })
        }
        const res = columns.filter(item => {
          return this.resultValue.indexOf(item[this.option.value]) > -1
        })
        const resLabel = res.map(item => {
          return item[this.option.label]
        })
        return resLabel.join(',')
      },
      set () {

      }
    }
  },
  data () {
    return {
      show: false,
      searchVal: '',
      columnsData: JSON.parse(JSON.stringify(this.columns)),
      checkboxValue: JSON.parse(JSON.stringify(this.selectValue)),
      checkedAll: false,
      resultValue: JSON.parse(JSON.stringify(this.selectValue)),
      unCheckedAll: false
    }
  },
  methods: {
    search (val) {
      if (val) {
        this.columnsData = this.columnsData.filter(item => {
          return item[this.option.label].indexOf(val) > -1
        })
      } else {
        this.columnsData = JSON.parse(JSON.stringify(this.columns))
      }
    },
    getData (val) {
      const res = this.columnsData.filter(item => {
        return val.indexOf(item[this.option.value]) > -1
      })
      return res
    },
    onConfirm () {
      this.resultValue = this.checkboxValue
      this.show = !this.show
      this.$emit('confirm', this.resultValue, this.getData(this.resultValue))
    },
    change (val) {
      this.$emit('change', val, this.getData(this.resultValue))
    },
    cancel () {
      this.show = !this.show
      this.$emit('cancel', this.resultValue)
    },
    toggle (index, item) {
      this.unCheckedAll = false
      this.checkboxValue = this.checkboxValue.filter(item => item != '00')
      this.$emit('click', item)
      this.$refs.checkboxes[index].toggle()
    },
    toggleAll () { // 全选
      this.unCheckedAll = false
      this.checkboxValue = this.checkboxValue.filter(item => item != '00')
      this.$refs.checkboxGroup.toggleAll(this.checkedAll)
    },
    unToggleAll () { // 不包含
      this.$refs.checkboxGroup.toggleAll(false)
      this.checkboxValue = ['00']
    },
    showPopu (disabled) {
      this.columnsData = JSON.parse(JSON.stringify(this.columns))
      this.checkboxValue = JSON.parse(JSON.stringify(this.selectValue))
      this.resultValue = JSON.parse(JSON.stringify(this.selectValue))
      if (disabled !== undefined && disabled !== false) {
        return false
      } else {
        this.show = !this.show
      }
    }
  },
  watch: {
    selectValue: function (newVal) {
      this.resultValue = newVal
    },
    resultValue (val) {
      this.searchVal = ''
      this.columnsData = JSON.parse(JSON.stringify(this.columns))
      this.$emit('input', val)
    },
    columnsData: {
      handler (val) {
        if (val.length && val.length === this.checkboxValue.length) {
          this.checkedAll = true
        } else {
          this.checkedAll = false
        }
      },
      immediate: true
    },
    checkboxValue: {
      handler (val) {
        if (val.length && val.length === this.columnsData.length) {
          this.checkedAll = true
        } else {
          if (val.includes('00')) { // 不包含
            this.unCheckedAll = true
          }
          this.checkedAll = false
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep.dh-field {
    background:#fff;
    .dh-cell.van-cell{padding: 10px 0;}
    .dh-cell.van-cell--required::before{left: -8px;}
    .van-popup{border-radius: 3px;}
  }
  ::v-deep.van-field--min-height .van-field__control {
    min-height: 0;
  }
  ::v-deep.van-cell {
    font-size: 16px;
    color: #000;
  }
  ::v-deep.van-picker__cancel{
      font-size: 16px;
      color: #737880;
  }
  ::v-deep.van-picker__confirm{
      font-size: 16px;
      color: #3D8BFF;
  }
</style>