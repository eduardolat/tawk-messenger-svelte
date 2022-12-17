<p align="center">
  <img
    width="250"
    src="./static/tawk-svelte.png"
    alt="Tawk Svelte logo"
  >
</p>

<br/>

## Installation

The plugin is available from the node and yarn package managers.

```bash
# Node
npm install tawk-messenger-svelte

# Yarn
yarn add tawk-messenger-svelte
```

<br/>

## Quickstart

Import **tawk-messenger-svelte** into your `.svelte` component. The **propertyId** and **widgetId** will
be found on your tawk Dashboard.

Log in to your account and go to **Administration > Channels > Chat Widget**.

<br/>

### Simple Example

```js
<script>
  import TawkMessengerSvelte from "tawk-messenger-svelte";
</script>

<TawkMessengerSvelte propertyId="XXXXX" widgetId="XXXXX" />
```

<br/>

### Advanced Example

In this example we show how to bind and dispatch events to the widget,
it uses the Javascript Api to open and close the widget.

Full api documentation: https://developer.tawk.to/jsapi/

```js
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

<button on:click={handleOpen}>Open</button>

<button on:click={handleClose}>Close</button>

<TawkMessengerSvelte
  {propertyId}
  {widgetId}
  bind:this={widget}
  on:load={handleLoad}
/>
```

<br/>

## Documentation

It exposes the same api of the official [Tawk Messenger React](https://github.com/tawk/tawk-messenger-react) but ported to Svelte components.

## Disclaimer

This is not an official plugin maintained by the Tawk.to team. It is just a useful tool for whoever wants to integrate Tawk with Svelte. I have nothing to do with Tawk.to
