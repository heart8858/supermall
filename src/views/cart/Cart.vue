<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>

    <!-- 商品的列表 -->
    <scroll class="content" ref="scroll" :probeType="3" :pullUpload="false">
      <cart-goods-list></cart-goods-list>
    </scroll>
    <!-- 底部的汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";

import CartGoodsList from "./childComps/CartGoodsList";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartGoodsList,
    CartBottomBar,
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>
.nav-bar {
  position: relative;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
}
.content {
  height: calc(100vh - 49px - 44px);
  overflow: hidden;
}
</style>
