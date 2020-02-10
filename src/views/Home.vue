<template>
  <div id="centerDiv" class="home">
    <cesiumContainer/>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import cesiumContainer from "./cesiumContainer.vue";

export default {
  name: "home",
  data() {
    return {
      toolBarState: true //显示隐藏导航栏
    };
  },
  components: { 
    cesiumContainer
  }
};
</script>
<style scoped>
/* 过渡效果   */
.home {
  width: 100%;
  height: 100%;
}
.v-enter {
  opacity: 0;
  transform: scale(0, 0);
}
.v-enter-active {
  transition: 0.6s;
}
.v-enter-to {
  opacity: 1;
  transform: scale(1, 1);
}
.v-leave {
  opacity: 1;
  transform: scale(1, 1);
}
.v-leave-to {
  opacity: 0;
  transform: scale(0, 0);
}
.v-leave-active {
  transition: 0s;
}
</style>
