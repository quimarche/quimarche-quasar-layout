<template lang="pug">
video.fit(loop :src="video.src" v-for="video in videos")
</template>

<script>
export default {
  props: {
    count: {
      required: true,
      type: Number
    },
    videos: {
      required: true,
      type: Array
    }
  }
}
</script>
