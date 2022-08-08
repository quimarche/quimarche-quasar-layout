<template lang="pug">
q-layout#layout(view="hHh LpR fFf")
  q-header#header(bordered)
    q-toolbar
      q-toolbar-title Quimarche Quasar Layout
      q-btn-dropdown(:label="activity.label")
        q-list(separator)
          q-item(@click="clickActivity(index)" clickable v-close-popup v-for="(activity, index) in activities" v-ripple)
            q-item-section
              q-item-label {{ activity.label }}
      q-btn-dropdown(:label="count.label")
        q-list(separator)
          q-item(@click="clickCount(index)" clickable v-close-popup v-for="(count, index) in counts" v-ripple)
            q-item-section
              q-item-label {{ count.label }}
  q-page-container
    q-page
      q-toolbar#breadcrumbs.bordered
        q-toolbar-title Breadcrumbs
      //- this could be a q-scroll-area rather than a div
      div(:style="observersLayoutPageScrollAreaStyle") 
        div.fit.q-pa-12
          component(:videos="videos" :is="activity.label")
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
import Outro from '@/Components/Outro.vue'
import PreInteraction from '@/Components/PreInteraction.vue'

export default {
  components: {
    Evaluation,
    Feedback,
    Interaction,
    Intro,
    Outro,
    PreInteraction
  },
  data() {
    return {
      activities: [{ label: 'Intro' }, { label: 'PreInteraction' }, { label: 'Interaction' }, { label: 'Evaluation' }, { label: 'Feedback' }, { label: 'Outro' }],
      activity: null,
      counts: [
        { label: '1 Person', length: 1 },
        { label: '2 People', length: 2 },
        { label: '3 People', length: 3 },
        { label: '4 People', length: 4 },
        { label: '5 People', length: 5 },
        { label: '6 People', length: 6 }
      ],
      count: null,
      observersLayoutObserver: null,
      observersLayoutObserverElementBreadcrumbs: null,
      observersLayoutObserverElementFooter: null,
      observersLayoutObserverElementHeader: null,
      observersLayoutObserverElementLayout: null,
      observersLayoutPageScrollAreaStyle: null,
      videos: []
    }
  },
  created() {
    this.clickActivity(0)
    this.clickCount(1)
  },
  mounted() {
    this.observersLayoutObserverInitialise()
  },
  beforeUnmount() {
    this.observersLayoutObserverFinalise()
  },
  methods: {
    clickActivity(index) {
      this.activity = this.activities[index]
    },
    clickCount(index) {
      this.count = this.counts[index]
      this.videos = Array.from({ length: this.count.length }, () => ({ src: 'video-1.mp4' }))
    },
    observersLayoutObserverCallback() {
      const clientHeightBreadcrumbs = this.observersLayoutObserverElementBreadcrumbs.clientHeight + 1
      const clientHeightFooter = this.observersLayoutObserverElementFooter.clientHeight + 1
      const clientHeightHeader = this.observersLayoutObserverElementHeader.clientHeight + 1

      this.observersLayoutPageScrollAreaStyle = `height: calc(100vh - ${clientHeightHeader}px - ${clientHeightBreadcrumbs}px - ${clientHeightFooter}px)`
    },
    observersLayoutObserverFinalise() {
      this.observersLayoutObserver?.disconnect()

      this.observersLayoutObserver = null
      this.observersLayoutObserverElementBreadcrumbs = null
      this.observersLayoutObserverElementFooter = null
      this.observersLayoutObserverElementHeader = null
      this.observersLayoutObserverElementLayout = null
      this.observersLayoutPageScrollAreaStyle = null
    },
    observersLayoutObserverInitialise() {
      this.observersLayoutObserverElementBreadcrumbs = document.getElementById('breadcrumbs')
      this.observersLayoutObserverElementFooter = document.getElementById('footer')
      this.observersLayoutObserverElementHeader = document.getElementById('header')
      this.observersLayoutObserverElementLayout = document.getElementById('layout')

      this.observersLayoutObserver = new ResizeObserver(() => this.observersLayoutObserverCallback())
      this.observersLayoutObserver.observe(this.observersLayoutObserverElementLayout, this.observersLayoutObserverElementBreadcrumbs)
    }
  }
}
</script>

<style lang="sass">
.bordered
  border-bottom: $layout-border
.q-pa-12
  padding: 12px
.row video
  flex-shrink: 1
</style>
