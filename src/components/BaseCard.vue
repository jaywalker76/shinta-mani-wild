<template>
  <div class="position-relative">
    <div class="ghost-wrapper px-3 d-xl-none">
      <picture v-if="!showPlaceholder" class="ghost-card-image d-table mx-auto px-3">
        <source :srcset="image.xl.src" :media="`(min-width: ${gridBreakpoints.xl})`" />
        <img :src="image.default.src" :alt="image.alt" />
      </picture>
    </div>
    <div :class="{'flex-row-reverse': isLeft}" class="wrapper-card row no-gutters mx-3 mx-xl-0">
      <div class="text col-12 col-xl-6 order-2 order-xl-1">
        <div
          :class="{'pl-xl-5 pr-xl-0': !isLeft, 'pr-xl-5 pl-xl-0': isLeft}"
          class="p-3 pt-xl-5 pb-xl-5"
        >
          <slot name="text"></slot>
        </div>
      </div>
      <div class="image col-12 col-xl-6 order-1 order-xl-2 d-flex align-items-center">
        <content-placeholders class="w-100 h-100 p-3" v-if="showPlaceholder" rounded>
          <content-placeholders-img class="h-100" />
        </content-placeholders>
        <div v-else class="px-3 px-xl-0 mx-auto">
          <div
            :class="{'is-right-skew': !isLeft, 'is-left-skew': isLeft}"
            class="card-image-wrapper position-relative"
          >
            <picture class="card-image position-relative">
              <source :srcset="image.xl.src" :media="`(min-width: ${gridBreakpoints.xl}px)`" />
              <img :src="image.default.src" :alt="image.alt" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'base-card',
  props: {
    image: {
      type: Object,
      default: null
    },
    isLeft: {
      type: Boolean,
      default: false
    },
    showPlaceholder: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
$shadow-small: 0px 9px 24px rgba($black, 0.25), 0px 4px 4px rgba($black, 0.25);
.wrapper-card {
  box-shadow: $shadow-small;
  border-radius: rem(15px);
  border-top: rem(24px) solid $primary;
  background: $brand-2;
}
.card-image-wrapper {
  @include media-breakpoint-down(lg) {
    height: rem(64px);
  }
  @include media-breakpoint-up(xl) {
    transform: scale(1.15);
    &::before {
      top: 0;
      bottom: 0;
      position: absolute;
      content: '';
      background: rgba($black, 0.2);
      border-radius: rem(10px);
      filter: blur(2px);
      box-shadow: 0 0 4.5rem rgba($black, 0.2);
    }
    &.is-right-skew {
      left: rem(96px);
      &::before {
        right: rem(4px);
        left: 0;
        transform: rotate(5.5deg) translateX(-16px) translateY(12px) skewX(2deg)
          skewY(-4deg);
      }
    }
    &.is-left-skew {
      right: rem(96px);
      &::before {
        left: rem(4px);
        right: 0;
        transform: rotate(-5.5deg) translateX(16px) translateY(12px)
          skewX(-2deg) skewY(4deg);
      }
    }
  }
}
// for the space above card in mobile
.ghost-card-image {
  visibility: hidden;
  img {
    height: 82%;
    margin-top: calc(-24px - 16px - 18%);
  }
}
.card-image {
  img {
    @include media-breakpoint-up(xl) {
      .is-right-skew & {
        transform: matrix(0.99, 0.04, -0.11, 1, 0, 0);
      }
      .is-left-skew & {
        transform: matrix(0.99, -0.04, 0.11, 1, 0, 0);
      }
    }
    max-width: 100%;
    border-radius: rem(10px);

    @include media-breakpoint-down(lg) {
      transform: translateY(-82%);
      box-shadow: $shadow-small;
    }
  }
}
</style>