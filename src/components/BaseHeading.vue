<template>
  <content-placeholders v-if="showPlaceholder" :class="classPlaceholder" centered rounded>
    <content-placeholders-heading />
  </content-placeholders>
  <component :is="type" v-else :class="className" class="base-heading text-uppercase font-serif">
    <span class="d-block mb-4">
      <span
        :class="{'border-bottom border-dark': borderDark, 'border-bottom border-light': borderLight}"
        class="d-inline-flex"
      >
        {{text}}
      </span>
      <div v-if="borderArt" class="border-art mt-2"></div>
    </span>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'base-heading',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    borderDark: {
      type: Boolean,
      default: false
    },
    borderLight: {
      type: Boolean,
      default: false
    },
    borderArt: {
      type: Boolean,
      default: false
    },
    showPlaceholder: {
      type: Boolean,
      default: false
    },
    classPlaceholder: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
.base-heading {
  margin-bottom: 0;
}
.border-art {
  height: rem(24px);
  background: url("https://res.cloudinary.com/ddwsbpkzk/image/upload/h_24/Shinta%20Mani%20Wild/home/line_umnjaa.png") no-repeat center;
}
</style>