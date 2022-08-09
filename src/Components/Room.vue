<template lang="pug">
videos(:videos="videos")
</template>

<script>
import Videos from '@/Components/Videos.vue'

import UseObservers from '@/Uses/UseObservers'

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
