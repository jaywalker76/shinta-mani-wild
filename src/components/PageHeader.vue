<template>
  <div class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="page-header--inner d-flex justify-content-between align-items-center">
            <div class="logo">
              <a href="/" class="logo-link d-block" title="Home">
                <img
                  class="w-100 h-100 d-block"
                  src="https://res.cloudinary.com/ddwsbpkzk/image/upload/w_48/Shinta%20Mani%20Wild/home/Bensley_Collection_Shinta_ManiWild_brandmark_white_k9xfuy.png"
                  alt="Shinta Mani Wild"
                />
              </a>
            </div>
            <div class="page-header--nav">
              <nav>
                <ul class="nav font-serif">
                  <li class="nav-item">
                    <a href="/search/tents" class="nav-link text-light">Tents</a>
                  </li>
                  <li class="nav-item">
                    <a href="/search/adventure" class="nav-link text-light">Adventures</a>
                  </li>
                  <li class="nav-item">
                    <a href="/search/food-and-drink" class="nav-link text-light">Food and Drink</a>
                  </li>
                  <li class="nav-item">
                    <a href="/search/wellness" class="nav-link text-light">Wellness</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  background: $primary;
  height: rem($header-height);
}
.page-header--inner {
  height: rem($header-height);
}
.page-header--nav {
  font-size: rem(20px);
}
.logo-link {
  width: rem(44px);
  height: rem(44px);
}
.font-serif {
  font-size: rem(16px * $serif-font-size-correction);
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>