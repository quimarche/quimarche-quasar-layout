<template lang="pug">
div Intro {{ count }}
q-video(:ratio="4/3" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0")
q-video(:ratio="4/3" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0")
</template>

<script>
export default {
  props: {
    count: {
      required: true,
      type: Number
    }
  }
}
</script>
