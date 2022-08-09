<template lang="pug">
videos-all-participants(:videos="videos")
</template>

<script>
import VideosAllParticipants from '@/Components/VideosAllParticipants.vue'

import UseObservers from '@/Uses/UseObservers'

export default {
  components: {
    VideosAllParticipants
  },
  props: {
    videos: {
      required: true,
      type: Array
    }
  }
}
</script>
