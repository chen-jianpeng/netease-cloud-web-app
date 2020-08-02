import request from "./request";
import { getOS } from "@/utils";

export function getBanner(params = {}) {
  params.type = getOS();
  return request({
    url: "/banner",
    methods: "get",
    params
  });
}

export function getHomepage(params) {
  return request({
    url: "/homepage/block/page",
    methods: "get",
    params
  });
}

export function getTopPlayListHighquality(params) {
  return request({
    url: "/top/playlist/highquality",
    methods: "get",
    params
  });
}

export function getPersonalizedNewsong(params) {
  return request({
    url: "/personalized/newsong",
    methods: "get",
    params
  });
}
