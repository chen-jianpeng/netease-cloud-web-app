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

    <van-swipe class="banner" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="banner in banners" :key="banner.bannerId">
        <a href="javascript:void(0);">
          <img :src="banner.pic" />
        </a>
      </van-swipe-item>
    </van-swipe>

    <template v-for="(block, index) in blocks">
      <component
        :is="block.showType | componentFilter"
        :key="index"
        :data="block"
      >
      </component>
    </template>
  </div>
</template>

<script>
import { getBanner, getHomepage } from "@/api";
export default {
  name: "Find",
  components: {
    "homepage-slide-songlist-align": () =>
      import("./homeComponent/Homepage-slide-songlist-align.vue"),
    "homepage-slide-playlist": () =>
      import("./homeComponent/Homepage-slide-playlist.vue"),
    "homepage-slide-mlog": () =>
      import("./homeComponent/Homepage-slide-mlog.vue"),
    "homepage-slide-listen-live": () =>
      import("./homeComponent/Homepage-slide-listen-live.vue"),
    "homepage-slide-playable-resource": () =>
      import("./homeComponent/Homepage-slide-playable-resource.vue")
  },
  data() {
    return {
      search: "",
      banners: [],
      blocks: []
    };
  },
  filters: {
    componentFilter(showType) {
      return showType.toLocaleLowerCase().replace(/_/g, "-");
    }
  },
  async created() {
    this.getBanner();
    this.getHomepage();
  },
  methods: {
    async getBanner() {
      let res = await getBanner();
      this.banners = res.banners;
    },
    async getHomepage() {
      let res = await getHomepage();
      this.blocks = res.data.blocks;
    }
  }
};
</script>

<style lang="scss" scoped>
.hd-wrap {
  height: 48px;
  .m-hd {
    overflow: hidden;
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

.banner {
  a {
    width: calc(100% - 8.533vw);
    margin: 0 auto;
    display: block;
    img {
      width: 100%;
      border-radius: 8px;
    }
  }
}
</style>
