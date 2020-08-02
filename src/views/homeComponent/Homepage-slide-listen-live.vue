<template>
  <div class="homepage-slide-listen-live">
    <block-title :title="data.uiElement.subTitle.title">
      <van-button type="default" size="mini" class="round">{{
        data.uiElement.button.text
      }}</van-button>
    </block-title>

    <scroll-list-horizon :data="data.creatives" scrollX>
      <ul class="slide-listen-live">
        <li
          v-for="item in data.extInfo"
          :key="item.id"
          class="slide-listen-live-item"
        >
          <div class="cover-img-wrap">
            <van-image class="cover" fit="cover" :src="item.cover" />
          </div>
          <div class="txt-wrap">
            <div class="txt text-two-line-ellipsis">
              {{ item.title }}
            </div>
          </div>
        </li>
      </ul>
    </scroll-list-horizon>
  </div>
</template>

<script>
import BlockTitle from "./BlockTitle";
import ScrollListHorizon from "@/components/ScrollListHorizon";
export default {
  name: "HomepageSlideListenLive",
  components: {
    BlockTitle,
    ScrollListHorizon
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-listen-live {
  display: flex;
  width: 688px;
  .slide-listen-live-item {
    width: 100px;
    &:first-child {
      margin-left: 16px;
    }
    &:not(:last-child) {
      margin-right: 12px;
    }
    .cover-img-wrap {
      width: 100%;
      height: 100px;
      border-radius: 6px;
      overflow: hidden;
      .cover {
        width: 100%;
        height: 100%;
      }
    }
    .txt-wrap {
      padding: 4px 0;
      .txt {
        height: 36px;
        line-height: 18px;
        font-size: 12px;
      }
    }
  }
}
</style>
