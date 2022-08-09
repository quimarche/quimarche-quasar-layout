<template lang="pug">
template(v-if="['Interaction'].includes(activity)")
  div.column.fit
    div.col
      videos-recorded-participants(:videos="videos")
    div.col
      div.fit.row
        div.col-2
          videos-unrecorded-participants(:videos="videos")
        div.col
          div.bg-grey-3.fit {{ activity }}
template(v-else-if="['Evaluation', 'Feedback', 'PreInteraction', 'Share'].includes(activity)")
  div.fit.row
    div.col-2
      videos-all-participants(:videos="videos")
    div.col
      div.bg-grey-3.fit {{ activity }}
template(v-else)
  div.fit.row
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
