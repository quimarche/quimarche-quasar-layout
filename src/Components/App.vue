<template lang="pug">
q-layout#layout(view="hHh LpR fFf")
  q-header#header(bordered)
    q-toolbar
      q-toolbar-title Quimarche Quasar Layout
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
      observersLayoutObserver: null,
      observersLayoutObserverElementBreadcrumbs: null,
      observersLayoutObserverElementFooter: null,
      observersLayoutObserverElementHeader: null,
      observersLayoutObserverElementLayout: null,
      observersLayoutPageScrollAreaStyle: null
    }
  },
  mounted() {
    this.observersLayoutObserverInitialise()
  },
  beforeUnmount() {
    this.observersLayoutObserverFinalise()
  },
  methods: {
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
