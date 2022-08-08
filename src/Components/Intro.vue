<template lang="pug">
div.fit.bg-info
  template(v-for="video in videos")
    video(autoplay controls loop :src="video.src")
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
