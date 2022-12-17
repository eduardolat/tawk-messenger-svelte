<script context="module" lang="ts">
  declare const window: Window & typeof globalThis & {
    Tawk_API: any
    Tawk_LoadStart: any
  }
</script>

<script lang="ts">
  export let propertyId:string
  export let widgetId:string

  import {onMount, createEventDispatcher} from 'svelte'

  import {loadScript} from './utils/widget.js'

  const dispatch = createEventDispatcher()

  const load = () => {
    if (!window || !document) {
      return
    }

    if (!propertyId || !widgetId) {
      console.error('propertyId and widgetId are required')
      return
    }

    init()
  }

  const init = () => {
    /**
     * Set placeholder
     */
    // eslint-disable-next-line camelcase
    window.Tawk_API = window.Tawk_API || {}
    // eslint-disable-next-line camelcase
    window.Tawk_LoadStart = new Date()

    /**
     * Inject the Tawk script
     */
    loadScript({
      propertyId,
      widgetId,
    })

    mapCallbacks()
  }

  /**
   * API for listening an event emitting
   * inside of the widget
   */
  const mapCallbacks = () => {
    window.addEventListener('tawkLoad', () => {
      dispatch('load')
    })

    window.addEventListener('tawkStatusChange', (status:any) => {
      dispatch('statusChange', status.detail)
    })

    window.addEventListener('tawkBeforeLoad', () => {
      dispatch('beforeLoad')
    })

    window.addEventListener('tawkChatMaximized', () => {
      dispatch('chatMaximized')
    })

    window.addEventListener('tawkChatMinimized', () => {
      dispatch('chatMinimized')
    })

    window.addEventListener('tawkChatHidden', () => {
      dispatch('chatHidden')
    })

    window.addEventListener('tawkChatStarted', () => {
      dispatch('chatStarted')
    })

    window.addEventListener('tawkChatEnded', () => {
      dispatch('chatEnded')
    })

    window.addEventListener('tawkPrechatSubmit', (data:any) => {
      dispatch('prechatSubmit', data.detail)
    })

    window.addEventListener('tawkOfflineSubmit', (data:any) => {
      dispatch('offlineSubmit', data.detail)
    })

    window.addEventListener('tawkChatMessageVisitor', (message:any) => {
      dispatch('chatMessageVisitor', message.detail)
    })

    window.addEventListener('tawkChatMessageAgent', (message:any) => {
      dispatch('chatMessageAgent', message.detail)
    })

    window.addEventListener('tawkChatMessageSystem', (message:any) => {
      dispatch('chatMessageSystem', message.detail)
    })

    window.addEventListener('tawkAgentJoinChat', (data:any) => {
      dispatch('agentJoinChat', data.detail)
    })

    window.addEventListener('tawkAgentLeaveChat', (data:any) => {
      dispatch('agentLeaveChat', data.detail)
    })

    window.addEventListener('tawkChatSatisfaction', (satisfaction:any) => {
      dispatch('chatSatisfaction', satisfaction.detail)
    })

    window.addEventListener('tawkVisitorNameChanged', (visitorName:any) => {
      dispatch('visitorNameChanged', visitorName.detail)
    })

    window.addEventListener('tawkFileUpload', (link:any) => {
      dispatch('fileUpload', link.detail)
    })

    window.addEventListener('tawkTagsUpdated', (data:any) => {
      dispatch('tagsUpdated', data.detail)
    })

    window.addEventListener('tawkUnreadCountChanged', (data:any) => {
      dispatch('unreadCountChanged', data.detail)
    })
  }

  onMount(() => {
    load()
  })

  /**
   * API for calling an action on the widget
   */
  export function maximize() {
    return window.Tawk_API.maximize()
  }

  export function minimize() {
    return window.Tawk_API.minimize()
  }

  export function toggle() {
    return window.Tawk_API.toggle()
  }

  export function popup() {
    return window.Tawk_API.popup()
  }

  export function showWidget() {
    return window.Tawk_API.showWidget()
  }

  export function hideWidget() {
    return window.Tawk_API.hideWidget()
  }

  export function toggleVisibility() {
    return window.Tawk_API.toggleVisibility()
  }

  export function endChat() {
    return window.Tawk_API.endChat()
  }

  /**
   * API for returning a data
   */
  export function getWindowType() {
    return window.Tawk_API.getWindowType()
  }

  export function getStatus() {
    return window.Tawk_API.getStatus()
  }

  export function isChatMaximized() {
    return window.Tawk_API.isChatMaximized()
  }

  export function isChatMinimized() {
    return window.Tawk_API.isChatMinimized()
  }

  export function isChatHidden() {
    return window.Tawk_API.isChatHidden()
  }

  export function isChatOngoing() {
    return window.Tawk_API.isChatOngoing()
  }

  export function isVisitorEngaged() {
    return window.Tawk_API.isVisitorEngaged()
  }

  export function onLoaded() {
    return window.Tawk_API.onLoaded
  }

  export function onBeforeLoaded() {
    return window.Tawk_API.onBeforeLoaded
  }

  export function widgetPosition() {
    return window.Tawk_API.widgetPosition()
  }

  /**
   * API for setting a data on the widget
   */
  export function visitor(data) {
    window.Tawk_API.visitor = data
  }

  export function setAttributes(attribute, callback) {
    window.Tawk_API.setAttributes(attribute, callback)
  }

  export function addEvent(event, metadata, callback) {
    window.Tawk_API.addEvent(event, metadata, callback)
  }

  export function addTags(tags, callback) {
    window.Tawk_API.addTags(tags, callback)
  }

  export function removeTags(tags, callback) {
    window.Tawk_API.removeTags(tags, callback)
  }
</script>
