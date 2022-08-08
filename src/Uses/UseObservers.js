import { computed, reactive } from 'vue'

const state = reactive({
  observersLayout: null,
  observersLayoutElementBreadcrumbs: null,
  observersLayoutElementFooter: null,
  observersLayoutElementHeader: null,
  observersLayoutElementLayout: null,
  observersLayoutStyle: null
})

export default () => {
  const observersLayoutCallback = () => {
    const clientHeightBreadcrumbs = state.observersLayoutElementBreadcrumbs.clientHeight + 1
    const clientHeightFooter = state.observersLayoutElementFooter.clientHeight + 1
    const clientHeightHeader = state.observersLayoutElementHeader.clientHeight + 1

    state.observersLayoutStyle = `height: calc(100vh - ${clientHeightHeader}px - ${clientHeightBreadcrumbs}px - ${clientHeightFooter}px)`
  }

  const observersLayoutFinalise = () => {
    state.observersLayout?.disconnect()

    state.observersLayout = null
    state.observersLayoutElementBreadcrumbs = null
    state.observersLayoutElementFooter = null
    state.observersLayoutElementHeader = null
    state.observersLayoutElementLayout = null
    state.observersLayoutStyle = null
  }

  const observersLayoutInitialise = () => {
    state.observersLayoutElementBreadcrumbs = document.getElementById('breadcrumbs')
    state.observersLayoutElementFooter = document.getElementById('footer')
    state.observersLayoutElementHeader = document.getElementById('header')
    state.observersLayoutElementLayout = document.getElementById('layout')

    state.observersLayout = new ResizeObserver(() => observersLayoutCallback())
    state.observersLayout.observe(state.observersLayoutElementLayout, state.observersLayoutElementBreadcrumbs)
  }

  return {
    observersLayoutFinalise: () => observersLayoutFinalise(),
    observersLayoutInitialise: () => observersLayoutInitialise(),
    observersLayoutStyle: computed(() => state.observersLayoutStyle)
  }
}
