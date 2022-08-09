<template lang="pug">
videos-all-participants(:videos="videos")
</template>

<script>
import VideosAllParticipants from '@/Components/VideosAllParticipants.vue'
import VideosRecordedParticipants from '@/Components/VideosRecordedParticipants.vue'
import VideosUnrecordedParticipants from '@/Components/VideosUnrecordedParticipants.vue'

export default {
  components: {
    VideosAllParticipants,
    VideosRecordedParticipants,
    VideosUnrecordedParticipants
  },
  props: {
    activity: {
      required: true,
      type: String
    },
    videos: {
      required: true,
      type: Array
    }
  }
}
</script>
