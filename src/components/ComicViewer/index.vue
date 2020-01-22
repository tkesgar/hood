<template>
  <div>
    <div v-if="!comicData">
      Loading...
    </div>
    <template v-else>
      <h1 class="text-center">
        {{ title }} <small>#{{ number }}</small>
      </h1>
      <div class="text-center text-muted mb-5">{{ date }}</div>
      <div class="text-center my-3">
        <comic-controls
          @first="handleFirst"
          @last="handleLast"
          @previous="handlePrevious"
          @next="handleNext"
          @random="handleRandom"
        />
      </div>
      <img class="ComicViewer-img my-4" :src="src" :alt="alt" />
      <blockquote class="blockquote text-center">{{ alt }}</blockquote>
    </template>
  </div>
</template>

<script>
import { getComic } from "../../utils/api";
import acall from "../../utils/acall";
import ComicControls from "../ComicControls";

export default {
  components: {
    ComicControls
  },
  props: {
    initialId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      id: this.initialId
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
  methods: {
    async getComicData(id) {
      this.comicData = await getComic(id);
    },
    handlePrevious() {
      acall(this.getComicData(this.number - 1));
    },
    handleNext() {
      acall(this.getComicData(this.number + 1));
    },
    handleFirst() {
      acall(this.getComicData(1));
    },
    handleLast() {
      acall(this.getComicData(0));
    },
    handleRandom() {
      acall(async () => {
        const lastComicData = await getComic(0);

        const randomId = Math.floor(Math.random() * lastComicData.num);
        await this.getComicData(randomId);
      });
    },
    handleKey(event) {
      event.preventDefault();

      switch (event.code) {
        case "ArrowLeft":
          this.handlePrevious();
          break;
        case "ArrowRight":
          this.handleNext();
          break;
        case "KeyF":
          this.handleFirst();
          break;
        case "KeyL":
          this.handleLast();
          break;
        case "KeyR":
          this.handleRandom();
          break;
        case "KeyH": {
          const target =
            event.ctrlKey && event.shiftKey
              ? "easterEggHoodAL"
              : "easterEggHood";
          this.$bvModal.show(target);
          break;
        }
        default:
          break;
      }
    }
  },
  created() {
    window.addEventListener("keydown", this.handleKey);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKey);
  },
  mounted() {
    acall(async () => {
      this.comicData = await getComic(this.id);
    });
  }
};
</script>

<style scoped>
.ComicViewer-img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}
</style>
