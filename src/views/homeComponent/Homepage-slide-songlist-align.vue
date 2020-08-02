<template>
  <div class="homepage-slide-songlist-align">
    <block-title :title="data.uiElement.subTitle.title">
      <van-button
        type="default"
        size="mini"
        class="round"
        icon="play-circle-o"
        >{{ data.uiElement.button.text }}</van-button
      >
    </block-title>
    <van-swipe
      class="banner"
      indicator-color="white"
      :loop="false"
      :width="340"
      :show-indicators="false"
    >
      <van-swipe-item v-for="(group, index) in data.creatives" :key="index">
        <ul class="song-group">
          <li
            v-for="item in group.resources"
            :key="item.resourceId"
            class="song"
          >
            <van-image
              class="cover"
              fit="cover"
              :src="item.uiElement.image.imageUrl"
            />
            <div class="info">
              <div>
                <span class="mainTitle">{{
                  _.get(item, "uiElement.mainTitle.title")
                }}</span>
                <span class="line">-</span>
                <span class="artists"
                  >{{ _.get(item, "resourceExtInfo.artists") | artistFilter }}
                </span>
              </div>
              <div class="subTitle">
                {{ _.get(item, "uiElement.subTitle.title") }}
              </div>
            </div>
            <van-icon name="play-circle-o" class="play" />
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import BlockTitle from "./BlockTitle";
export default {
  name: "HomepageSlidesonglistAlign",
  components: {
    BlockTitle
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  filters: {
    artistFilter(artists) {
      return artists.map(artist => artist.name).join("/");
    }
  },
  created() {
    console.log(this);
  }
};
</script>

<style lang="scss" scoped>
.homepage-slide-songlist-align {
  .song-group {
    .song {
      display: flex;
      align-items: center;
      padding: 0 16px;
      &:not(:last-child) {
        margin-bottom: 12px;
      }
      .cover {
        width: 50px;
        height: 50px;
        border-radius: 4px;
        overflow: hidden;
      }
      .info {
        flex: 1;
        margin: 0 8px;
        .line,
        .artists,
        .subTitle {
          margin-top: 8px;
          font-size: 12px;
          color: #999999;
          vertical-align: middle;
        }
        .line {
          margin: 0 4px;
        }
      }
      .play {
        font-size: 20px;
        color: #eb4d44;
      }
    }
  }
}
</style>
