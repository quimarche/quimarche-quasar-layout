<template lang="pug">
div#videos-recorded-participants.fit
  video-participant(loop :video="video" v-for="video in videosRecordedParticipants")
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
    videosRecordedParticipants() {
      return this.videos.slice(0, 2)
    }
  },
  mounted() {
    this.observersVideosInitialise('videos-recorded-participants')
    for (const element of document.getElementsByTagName('video')) {
      setTimeout(() => element.play(), Math.floor(Math.random() * 1000))
    }
  },
  beforeUnmount() {
    this.observersVideosFinalise()
  }
}
</script>
