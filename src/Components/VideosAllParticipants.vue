<template lang="pug">
div#videosAllParticipants.fit
  video-participant(loop :video="video" v-for="video in videosAllParticipants")
</template>

<script>
import VideoParticipant from '@/Components/VideoParticipant.vue'

import UseObservers from '@/Uses/UseObservers'

export default {
  components: {
    VideoParticipant
  },
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
    videosAllParticipants() {
      return this.videos
    }
  },
  mounted() {
    this.observersVideosInitialise('videosAllParticipants')
    for (const element of document.getElementsByTagName('video')) {
      setTimeout(() => element.play(), Math.floor(Math.random() * 1000))
    }
  },
  beforeUnmount() {
    this.observersVideosFinalise()
  }
}
</script>
