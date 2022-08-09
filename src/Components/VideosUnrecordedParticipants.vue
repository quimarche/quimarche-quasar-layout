<template lang="pug">
div#videosUnrecordedParticipants.fit
  video(loop :src="video.src" v-for="video in videosUnrecordedParticipants")
</template>

<script>
import UseObservers from '@/Uses/UseObservers'

export default {
  props: {
    videos: {
      required: true,
      type: Array
    }
  },
  setup() {
    const { observersVideosFinalise, observersVideosInitialise, observersVideosStyle } = UseObservers()
    return {
      observersVideosFinalise,
      observersVideosInitialise,
      observersVideosStyle
    }
  },
  computed: {
    videosUnrecordedParticipants() {
      return this.videos.slice(2)
    }
  },
  mounted() {
    this.observersVideosInitialise('videosUnrecordedParticipants')
    for (const element of document.getElementsByTagName('video')) {
      setTimeout(() => element.play(), Math.floor(Math.random() * 1000))
    }
  },
  beforeUnmount() {
    this.observersVideosFinalise()
  }
}
</script>
