<template lang="pug">
q-layout#layout(view="hHh LpR fFf")
  q-header#header(bordered)
    q-toolbar
      q-toolbar-title Quimarche Quasar Layout
      q-btn-dropdown(flat :label="activity")
        q-list(separator)
          q-item(@click="clickActivity(index)" clickable v-close-popup v-for="(activity, index) in activities" v-ripple)
            q-item-section
              q-item-label {{ activity }}
      q-btn-dropdown(flat :label="count.label")
        q-list(separator)
          q-item(@click="clickCount(index)" clickable v-close-popup v-for="(count, index) in counts" v-ripple)
            q-item-section
              q-item-label {{ count.label }}
  q-page-container
    q-page
      q-toolbar#breadcrumbs.bordered
        q-toolbar-title Breadcrumbs
      //- this could be a q-scroll-area rather than a div
      div(:style="observersLayoutStyle")
        div.fit.q-pa-12
          component(:activity="activity" :is="activity" :videos="videos")
  q-footer#footer(bordered)
    q-bar(dense)
      q-space
      div.ellipsis Quimarche Quasar Layout
</template>

<script>
import Evaluation from '@/Components/Evaluation.vue'
import Feedback from '@/Components/Feedback.vue'
import Interaction from '@/Components/Interaction.vue'
import Intro from '@/Components/Intro.vue'
import PreInteraction from '@/Components/PreInteraction.vue'
import Share from '@/Components/Share.vue'

import UseObservers from '@/Uses/UseObservers'

export default {
  components: {
    Evaluation,
    Feedback,
    Interaction,
    Intro,
    PreInteraction,
    Share
  },
  setup() {
    const { observersLayoutFinalise, observersLayoutInitialise, observersLayoutStyle } = UseObservers()
    return {
      observersLayoutFinalise,
      observersLayoutInitialise,
      observersLayoutStyle
    }
  },
  data() {
    return {
      activities: ['Intro', 'PreInteraction', 'Interaction', 'Evaluation', 'Feedback', 'Share'],
      activity: null,
      counts: [
        { label: '1 Person', length: 1 },
        { label: '2 People', length: 2 },
        { label: '3 People', length: 3 },
        { label: '4 People', length: 4 },
        { label: '5 People', length: 5 },
        { label: '6 People', length: 6 },
        { label: '50 People', length: 50 }
      ],
      count: null,
      videos: []
    }
  },
  created() {
    this.clickActivity(0)
    this.clickCount(1)
  },
  mounted() {
    this.observersLayoutInitialise()
  },
  beforeUnmount() {
    this.observersLayoutFinalise()
  },
  methods: {
    clickActivity(index) {
      this.activity = this.activities[index]
    },
    clickCount(index) {
      this.count = this.counts[index]
      this.videos = Array.from({ length: this.count.length }, (_element, index) => ({ index, src: 'video.mp4' }))
    }
  }
}
</script>

<style lang="sass">
.bordered
  border-bottom: $layout-border
.q-pa-12
  padding: 12px
#videos-all-participants, #videos-recorded-participants, #videos-unrecorded-participants
  position: relative
</style>
