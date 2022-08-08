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
      q-scroll-area(:style="observersLayoutPageScrollAreaStyle")
        div.q-layout-padding
          div(v-for="n in 40") Line {{ n }}
  q-footer#footer(bordered)
    q-bar(dense)
      q-space
      div.ellipsis Quimarche Quasar Layout
</template>

<script>
export default {
  data() {
    return {
      activities: [{ label: 'Intro' }, { label: 'Pre-Interaction' }, { label: 'Interaction' }, { label: 'Evaluation' }, { label: 'Feedback' }, { label: 'Outro' }],
      activity: null,
      counts: [{ label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }, { label: '5' }, { label: '6' }],
      count: null,
      observersLayoutObserver: null,
      observersLayoutObserverElementBreadcrumbs: null,
      observersLayoutObserverElementFooter: null,
      observersLayoutObserverElementHeader: null,
      observersLayoutObserverElementLayout: null,
      observersLayoutPageScrollAreaStyle: null
    }
  },
  created() {
    this.clickActivity(0)
    this.clickCount(0)
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
</style>
