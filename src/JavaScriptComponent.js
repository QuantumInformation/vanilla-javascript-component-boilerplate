import './JavaScriptComponent.pcss'

/**
 * A JavaScriptComponent component
 *
 * Supports attaching to a div
 *
 * Has a bunch of stuff you normally use in vanilla components
 *
 */
export default class JavaScriptComponent {

  constructor (selector) {
    this.CUSTOM_EVENT = 'CUSTOM_EVENT'
    this.customEventHandlerBound = this.customEventHandler.bind(this)


    this.hostElement = document.querySelector(selector)
    this.hostElement.className = 'javascript-component'
  }

  /**
   * Will contain logic to attach this components DOM to the existing DOM structure of your application.
   * It will also usually contain setup of listeners and interactivity.
   */
  attach () {
    this.hostElement.innerHTML = `
        <button class='my-button-1'>Click me to set text 1</button>
        <button class='my-button-2'>Click me to set text 2</button>
        <button class='my-button-3'>Dispatch a custom event</button>
        <p id='component-output'></p>
    `
    this.componentOutput = document.querySelector('#component-output')
    this.addListeners()
  }

  addListeners () {
    document.querySelector('.my-button-1').addEventListener('click', (event) => {
      this.componentOutput.innerHTML = 'hello-world'
    })
    document.querySelector('.my-button-2').addEventListener('click', (event) => {
      this.componentOutput.innerHTML = 'hello-universe'
    })
    document.querySelector('.my-button-3').addEventListener('click', (event) => {
      let customEvent = new CustomEvent(JavaScriptComponent.CUSTOM_EVENT)
      document.body.dispatchEvent(customEvent)
    })
    document.body.addEventListener(JavaScriptComponent.CUSTOM_EVENT, this.customEventHandlerBound)
  }

  detach () {
    // put logic in here to remove any listeners that will remain after the components removal
    // ie listeners on any remaining dom
    this.removeListeners()
    this.hostElement.innerHTML = ''
    this.hostElement.className = ''
  }

  removeListeners () {
    document.body.removeEventListener(JavaScriptComponent.CUSTOM_EVENT, this.customEventHandlerBound)
  }

  customEventHandler (event) {
    console.log(`Received event: ${event.type}`)
    this.componentOutput.innerHTML = `Received event: ${event.type}`
  }
}
