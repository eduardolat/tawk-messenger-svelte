<script>
  import TawkMessengerSvelte from "tawk-messenger-svelte";

  let widget
  const propertyId = 'XXXXX'
  const widgetId = 'XXXXX'

  const handleLoad = () => {
    alert(`Widget loaded! You can now use the widget API.`)
  }

  const handleOpen = () => {
    widget.maximize()
  }

  const handleClose = () => {
    widget.minimize()
  }
</script>

<h1>Welcome to tawk-messenger-svelte</h1>

<p>
  In this example we show how to bind and dispatch events to the widget,
  it uses the Javascript Api to open and close the widget.
</p>

<p>
  Full api documentation: https://developer.tawk.to/jsapi/
</p>

<button on:click={handleOpen}>Open</button>
<br/>
<button on:click={handleClose}>Close</button>

<TawkMessengerSvelte
  {propertyId}
  {widgetId}
  bind:this={widget}
  on:load={handleLoad}
/>
