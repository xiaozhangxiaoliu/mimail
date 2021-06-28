<template>
  <transition name="slide">
    <div class="modal" v-show="show">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{ title }}</span>
          <a
            href="javascript:;"
            class="icon-close"
            @click="$emit('cancel')"
          ></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a
            href="javascript:;"
            class="btn"
            v-if="btntype == 1"
            @click="$emit('submit')"
            >{{ sureText }}</a
          >
          <a
            href="javascript:;"
            class="btn"
            v-if="btntype == 2"
            @click="$emit('cancel')"
            >{{ cacelText }}</a
          >

          <div class="btn-gooup" v-if="btntype == 3">
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{
              sureText
            }}</a>
            <a
              href="javascript:;"
              class="btn btn-default"
              v-on:click="$emit('cancel')"
              >{{ cacelText }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    //弹框类型:小small、中middle、大large、表单form
    modalType: {
      type: String,
      default() {
        return "form";
      },
    },
    //标题
    title: {
      type: String,
    },
    //按钮类型 1:确定按钮 2:取消按钮 3:确定取消
    btntype: {
      type: Number,
    },
    sureText: {
      type: String,
      default() {
        return "确定";
      },
    },

    cacelText: {
      type: String,
      default: function () {
        return "取消";
      },
    },

    showModal: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    show() {
      return this.showModal;
    },
  },
  methods: {
    close() {
      this.showModal = false;
    },
  },
};
</script>

<style lang='scss' scoped>
</style>