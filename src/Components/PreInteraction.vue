<template lang="pug">
videos(:key="videos.length" :videos="videos")
</template>

<script>
import Videos from '@/Components/Videos.vue'

export default {
  components: {
    Videos
  },
  props: {
    videos: {
      required: true,
      type: Array
    }
  }
}
</script>
