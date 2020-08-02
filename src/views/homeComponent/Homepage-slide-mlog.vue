<template>
  <div class="homepage-slide-mlog">
    <block-title :title="data.uiElement.subTitle.title">
      <van-button type="default" size="mini" class="round">{{
        data.uiElement.button.text
      }}</van-button>
    </block-title>

    <scroll-list-horizon :data="data.extInfo.squareFeedViewDTOList" scrollX>
      <ul class="slide-mlog">
        <li
          v-for="item in data.extInfo.squareFeedViewDTOList"
          :key="item.id"
          class="slide-mlog-item"
        >
          <van-image
            class="cover-img-wrap"
            fit="cover"
            :src="item.resource.mlogBaseData.coverUrl"
          />
          <div class="txt-wrap">
            <div class="txt text-two-line-ellipsis">
              {{ item.resource.mlogBaseData.text }}
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
  name: "HomepageSlideMlog",
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
.slide-mlog {
  display: flex;
  width: 688px;
  .slide-mlog-item {
    width: 100px;
    border-radius: 6px;
    overflow: hidden;
    font-size: 0;
    &:first-child {
      margin-left: 16px;
    }
    &:not(:last-child) {
      margin-right: 12px;
    }
    .cover-img-wrap {
      width: 100%;
      height: 140px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .txt-wrap {
      padding: 8px 10px;
      background-color: #f8f8f8;
      .txt {
        height: 36px;
        line-height: 18px;
        font-size: 12px;
      }
    }
  }
}
</style>
