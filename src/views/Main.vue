<template>
  <b-container class="Main my-5">
    <comic-viewer :initial-id="initialId" />
  </b-container>
</template>

<script>
import ComicViewer from "../components/ComicViewer";

export default {
  components: {
    ComicViewer
  },
  props: {
    initialId: {
      type: Number,
      default: null
    }
  }
};
</script>
