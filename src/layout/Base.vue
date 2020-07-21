<template>
  <div class="base-layout">
    <div class="mini-player">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,28,28"
        class="progress"
      >
        <circle
          class="progress-bg"
          cx="14"
          cy="14"
          r="12"
          stroke-width="2"
          stroke="#ccc"
          fill="none"
          stroke-linecap="round"
        />
        <circle
          ref="bar"
          class="progress-bar"
          cx="14"
          cy="14"
          r="12"
          stroke-width="2"
          stroke="#d43c33"
          style="transform-origin: 14px 14px;transform: rotate(-90deg);transition: stroke-dasharray 0.3s ease-in;"
          fill="none"
          stroke-dasharray="0,10000"
        />
      </svg>
    </div>
    <router-view></router-view>
    <div class="tab-bar">
      <a v-for="nav in navs" :key="nav.icon" class="tab-bar-item">
        <i class="icon iconfont" :class="nav.icon"></i
        ><span class="txt">{{ nav.text }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
  data() {
    return {
      navs: [
        { icon: "icon-icon-test2", text: "发现" },
        { icon: "icon-icon-test", text: "视频" },
        { icon: "icon-icon-test1", text: "我的" },
        { icon: "icon-icon-test4", text: "云村" },
        { icon: "icon-icon-test3", text: "账号" }
      ]
    };
  },
  mounted() {
    this.rotateProgressBar();
  },
  methods: {
    rotateProgressBar() {
      var val = 25;
      val = Math.max(0, val);
      val = Math.min(100, val);
      let bar = this.$refs.bar;
      let circleLength = Math.floor(2 * Math.PI * bar.getAttribute("r"));
      bar.setAttribute(
        "stroke-dasharray",
        "" + (circleLength * val) / 100 + ",10000"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.mini-player {
  width: 28px;
  height: 28px;
  position: fixed;
  top: 10px;
  right: 16px;
  z-index: 10;
  .progress {
    width: 100%;
    height: 100%;
  }
}

.tab-bar {
  position: fixed;
  z-index: 3;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  .tab-bar-item {
    position: relative;
    text-align: center;
    transform: scale(0.5);
    .icon {
      display: inline-block;
      font-size: 48px;
    }
    .txt {
      margin-top: 4px;
      display: block;
      font-size: 20px;
    }
  }
}
</style>

<style lang="scss">
body {
  padding-bottom: 50px;
}
</style>
