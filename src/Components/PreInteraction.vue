<template lang="pug">
room(:key="videos.length" :videos="videos")
</template>

<script>
import Room from '@/Components/Room.vue'

export default {
  components: {
    Room
  },
  props: {
    videos: {
      required: true,
      type: Array
    }
  }
}
</script>
