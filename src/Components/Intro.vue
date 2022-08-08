<template lang="pug">
div.fit.row.bg-info
  video(loop :src="video.src" v-for="video in videos")
  //- div.fit videos: {{ videos }}
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
