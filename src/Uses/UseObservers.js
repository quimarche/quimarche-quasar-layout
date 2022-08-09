import initLayoutContainer from 'opentok-layout-js'
import { computed, reactive } from 'vue'

export default () => {
  const state = reactive({
    observersLayoutElementBreadcrumbs: null,
    observersLayoutElementFooter: null,
    observersLayoutElementHeader: null,
    observersLayoutElementLayout: null,
    observersLayoutResizeObserver: null,
    observersLayoutStyle: null,
    observersVideosElementVideos: null,
    observersVideosMutationObserver: null,
    observersVideosResizeObserver: null
  })

  const observersLayoutCallback = () => {
    const clientHeightBreadcrumbs = state.observersLayoutElementBreadcrumbs.clientHeight + 1
    const clientHeightFooter = state.observersLayoutElementFooter.clientHeight + 1
    const clientHeightHeader = state.observersLayoutElementHeader.clientHeight + 1

    state.observersLayoutStyle = `height: calc(100vh - ${clientHeightHeader}px - ${clientHeightBreadcrumbs}px - ${clientHeightFooter}px)`
  }

  const observersLayoutFinalise = () => {
    state.observersLayoutResizeObserver?.disconnect()

    state.observersLayoutElementBreadcrumbs = null
    state.observersLayoutElementFooter = null
    state.observersLayoutElementHeader = null
    state.observersLayoutElementLayout = null
    state.observersLayoutResizeObserver = null
    state.observersLayoutStyle = null
  }

  const observersLayoutInitialise = () => {
    state.observersLayoutElementBreadcrumbs = document.getElementById('breadcrumbs')
    state.observersLayoutElementFooter = document.getElementById('footer')
    state.observersLayoutElementHeader = document.getElementById('header')
    state.observersLayoutElementLayout = document.getElementById('layout')

    state.observersLayoutResizeObserver = new ResizeObserver(() => observersLayoutCallback())
    state.observersLayoutResizeObserver.observe(state.observersLayoutElementLayout, state.observersLayoutElementBreadcrumbs)
  }

  const observersVideosCallback = () => {
    initLayoutContainer(state.observersVideosElementVideos, { fixedRatio: true, scaleLastRow: false }).layout()
  }

  const observersVideosFinalise = () => {
    state.observersVideosMutationObserver?.disconnect()
    state.observersVideosResizeObserver?.disconnect()

    state.observersVideosElementVideos = null
    state.observersVideosMutationObserver = null
    state.observersVideosResizeObserver = null
  }

  const observersVideosInitialise = (id) => {
    state.observersVideosElementVideos = document.getElementById(id)

    state.observersVideosMutationObserver = new MutationObserver(() => observersVideosCallback())
    state.observersVideosMutationObserver.observe(state.observersVideosElementVideos, { childList: true })

    state.observersVideosResizeObserver = new ResizeObserver(() => observersVideosCallback())
    state.observersVideosResizeObserver.observe(state.observersVideosElementVideos)

    setTimeout(() => observersVideosCallback(), 50)
  }

  return {
    observersLayoutFinalise: () => observersLayoutFinalise(),
    observersLayoutInitialise: () => observersLayoutInitialise(),
    observersLayoutStyle: computed(() => state.observersLayoutStyle),
    observersVideosFinalise: () => observersVideosFinalise(),
    observersVideosInitialise: (id) => observersVideosInitialise(id)
  }
}
