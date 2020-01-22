<template>
  <b-button-group>
    <b-button type="button" @click="$emit('first')">⏮️</b-button>
    <b-button type="button" @click="$emit('previous')">◀️</b-button>
    <b-button type="button" @click="$emit('random')">🔀</b-button>
    <b-button type="button" @click="$emit('next')">▶️</b-button>
    <b-button type="button" @click="$emit('last')">⏭️</b-button>
  </b-button-group>
</template>
