<template>
  <div class="separator" :class="getSide()">
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "Separator",
  props: ["left", "right"],
  methods: {
    getSide() {
      if (this.left) {
        return 'left'
      } else if (this.right) {
        return 'right'
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.separator {
  height: 2px;
  width: 100%;
  display: flex;
    background-color: $background-light;

  &.left {
    justify-content: left;
  }

  &.right {
    justify-content: right;
  }

  &.left .line, &.right .line {
    width: 67%;
  }

  .line {
    width: 100%;
    background-color: $accent;
  }
}
#app.dark .separator {
    background-color: $background-dark;
}
</style>
