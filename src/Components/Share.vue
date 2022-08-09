<template lang="pug">
room(:activity="activity" :key="videos.length" :videos="videos")
</template>

<script>
import Room from '@/Components/Room.vue'

export default {
  components: {
    Room
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
