<template>
  <div>
    <div v-if="!comicData">
      Loading...
    </div>
    <template v-else>
      <div data-test="comic-title">{{ title }}</div>
      <div data-test="comic-date">{{ date }}</div>
      <div data-test="comic-number">{{ number }}</div>
      <img :src="src" data-test="comic-img" />
      <div data-test="comic-alt">{{ alt }}</div>
    </template>
  </div>
</template>

<script>
import { getComic } from "../../utils/api";
import acall from "../../utils/acall";

export default {
  props: {
    id: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      comicData: null
    };
  },
  computed: {
    title() {
      return this.comicData.title;
    },
    date() {
      return [
        this.comicData.day,
        this.comicData.month,
        this.comicData.year
      ].join("-");
    },
    number() {
      return this.comicData.num;
    },
    src() {
      return this.comicData.img;
    },
    alt() {
      return this.comicData.alt;
    }
  },
  mounted() {
    acall(async () => {
      this.comicData = await getComic(this.id);
    });
  }
};
</script>
