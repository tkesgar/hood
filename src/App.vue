<template>
  <div>
    <b-modal id="easterEggHood" size="md" title="Hood">
      <a href="https://en.wikipedia.org/wiki/HMS_Hood" target="_blank">
        <img
          class="App-imgEasterEgg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/HMS_Hood_%2851%29_-_March_17%2C_1924.jpg/640px-HMS_Hood_%2851%29_-_March_17%2C_1924.jpg"
          alt="Hood"
        />
      </a>

      <template v-slot:modal-footer="{ hide }">
        <b-button block type="button" @click="hide()">Close</b-button>
      </template>
    </b-modal>

    <b-modal id="easterEggHoodAL" size="md" title="Hood">
      <a href="https://www.pixiv.net/en/artworks/78109125" target="_blank">
        <img
          class="App-imgEasterEgg"
          src="https://static.zerochan.net/Hood.%28Azur.Lane%29.full.2776455.jpg"
          alt="Cute Hood"
        />
      </a>

      <template v-slot:modal-footer="{ hide }">
        <b-button block type="button" @click="hide()">Close</b-button>
      </template>
    </b-modal>

    <router-view />
  </div>
</template>

<style scoped>
.App-imgEasterEgg {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: auto;
}
</style>
