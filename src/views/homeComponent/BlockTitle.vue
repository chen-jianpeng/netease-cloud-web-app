<template>
  <div class="block-title">
    <div class="title">{{ title }}</div>
    <div class="action">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.block-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 12px;
}
</style>
