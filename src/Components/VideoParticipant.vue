<template lang="pug">
video(loop :src="video.src")
</template>

<script>
export default {
  props: {
    video: {
      required: true,
      type: Array
    }
  }
}
</script>
