<template>
  <div class="find">
    <div class="hd-wrap">
      <div class="m-hd">
        <div class="left">
          <i class="iconfont icon-icon-test5"></i>
        </div>
        <div class="center">
          <van-search
            v-model="search"
            placeholder="请输入搜索关键词"
            input-align="center"
          />
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from "vant";
export default {
  name: "Find",
  components: {
    "van-search": Search
  },
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.hd-wrap {
  height: 48px;
  .m-hd {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    height: 44px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    background-color: #fff;
    .left {
      width: 24px;
      text-align: center;
      i {
        font-size: 20px;
      }
    }
    .center {
      flex: 1;
      ::v-deep .van-search__content {
        border-radius: 17px;
      }
    }
    .right {
      width: 24px;
    }
  }
}
</style>
